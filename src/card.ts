import { html, LitElement, TemplateResult, svg, nothing } from "lit";
import { styles } from "./card.styles";
import { state } from "lit/decorators/state";

// import { formatNumber } from "../../../../common/number/format_number";

import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";
import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiBatteryHigh,
  mdiHome,
  mdiSolarPower,
  mdiCarSports,
  mdiTransmissionTower,
  mdiCloseOutline,
} from "@mdi/js";

interface Config extends LovelaceCardConfig {
  grid_to_house_entity: string;
  generation_to_grid_entity: string;
  generation_to_battery_entity: string;
  generation_to_house_entity: string;
  battery_to_house_entity: string;
  battery_to_grid_entity: string;
  battery_extra_entity: string;
  house_extra_entity: string;
  grid_extra_entity: string;
  generation_icon: string;
  appliance1_state_entity: string;
  appliance1_consumption_entity: string;
  appliance2_state_entity: string;
  appliance2_consumption_entity: string;
}

interface DashValues {
  stroke_dashoffset: string;
  stroke_dasharray: string;
}

const CIRCLE_CIRCUMFERENCE = 238.76104;

export class TestlaPowerDistribution extends LitElement {
  // internal reactive states
  @state() private _grid_to_house_entity: string;
  @state() private _generation_to_grid_entity: string;
  @state() private _generation_to_battery_entity: string;
  @state() private _generation_to_house_entity: string;
  @state() private _battery_to_house_entity: string;
  @state() private _battery_to_grid_entity: string;
  @state() private _battery_extra_entity: string;
  @state() private _house_extra_entity: string;
  @state() private _grid_extra_entity: string;
  @state() private _generation_icon: string;
  @state() private _appliance1_state_entity: string;
  @state() private _appliance1_consumption_entity: string;
  @state() private _appliance2_state_entity: string;
  @state() private _appliance2_consumption_entity: string;

  // private property
  private _hass;

  // lifecycle interface
  setConfig(config: Config) {
    // this._header = config.header === "" ? nothing : config.header;
    // this._entity = config.entity;
    this._grid_to_house_entity = config.grid_to_house_entity;
    this._generation_to_grid_entity = config.generation_to_grid_entity;
    this._generation_to_battery_entity = config.generation_to_battery_entity;
    this._generation_to_house_entity = config.generation_to_house_entity;
    this._battery_to_house_entity = config.battery_to_house_entity;
    this._battery_to_grid_entity = config.battery_to_grid_entity;
    this._battery_extra_entity = config.battery_extra_entity;
    this._house_extra_entity = config.house_extra_entity;
    this._grid_extra_entity = config.grid_extra_entity;
    this._generation_icon = config.generation_icon;
    this._appliance1_state_entity = config.appliance1_state_entity;
    this._appliance1_consumption_entity = config.appliance1_consumption_entity;
    this._appliance2_state_entity = config.appliance2_state_entity;
    this._appliance2_consumption_entity = config.appliance2_consumption_entity;

    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    // this._state = hass.states[this._entity];
    // if (this._state) {
    //   this._status = this._state.state;
    //   let fn = this._state.attributes.friendly_name;
    //   this._name = fn ? fn : this._entity;
    // }
  }

  // declarative part
  static styles = styles;

  private calcStrokeDashValues(values: number[]): DashValues[] {
    let total = values.reduce((a, v) => {
      return a + v;
    }, 0);
    let offset = 0;
    let return_values: DashValues[] = [];
    values.reduce((a: DashValues[], v: number) => {
      let circle_slice: number = CIRCLE_CIRCUMFERENCE * (v / total);
      let newDashValue: DashValues = {
        stroke_dashoffset: `${offset}`,
        stroke_dasharray: `${circle_slice} ${
          CIRCLE_CIRCUMFERENCE - circle_slice
        }`,
      };
      a.push(newDashValue);
      offset -= circle_slice;
      return a;
    }, return_values);
    return return_values;
  }

  render() {
    let generation_to_house = parseFloat(this._generation_to_house_entity);
    let grid_to_house = parseFloat(this._grid_to_house_entity);
    let battery_to_house = parseFloat(this._battery_to_house_entity);

    let homeSliceDashValues: DashValues[] = this.calcStrokeDashValues([
      battery_to_house,
      grid_to_house,
      generation_to_house,
    ]);

    const totalFlow =
      (parseFloat(this._grid_to_house_entity) || 0) +
      (parseFloat(this._generation_to_grid_entity) || 0) +
      (parseFloat(this._generation_to_battery_entity) || 0) +
      (parseFloat(this._generation_to_house_entity) || 0) +
      (parseFloat(this._battery_to_house_entity) || 0) +
      (parseFloat(this._battery_to_grid_entity) || 0);

    return html`
      <ha-card .header=${"My Tesla Distro"}>
        <div class="card-content">
          <div class="row">
            <div class="spacer"></div>
            <div class="circle-container solar">
              <span class="label"> Solar </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiSolarPower}></ha-svg-icon>
                ${this._generation_to_battery_entity} kW
              </div>
            </div>
            <div class="circle-container equipment-1">
              <span class="label"> Equipment 1 </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiCarSports}></ha-svg-icon>
                ${this._appliance1_state_entity}kW
              </div>
            </div>
          </div>
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                <ha-svg-icon .path=${mdiTransmissionTower}></ha-svg-icon>
                ${
                  parseFloat(this._grid_extra_entity) >= 0
                    ? html`
                        <span class="consumption">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowRight}
                          ></ha-svg-icon>
                          ${parseFloat(this._grid_extra_entity)} kW
                        </span>
                      `
                    : html`
                        <span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowLeft}
                          ></ha-svg-icon>
                          ${parseFloat(this._grid_extra_entity) * -1} kW
                        </span>
                      `
                }
              </div>
              <span class="label"> Grid </span>
            </div>
            <div class="circle-container home">
              <div class="circle">
                <ha-svg-icon .path=${mdiHome}></ha-svg-icon>
                ${this._house_extra_entity} kW
                <svg>
                  ${svg`
                    <circle class="battery" cx="40" cy="40" r="38" stroke-dasharray="${homeSliceDashValues[0].stroke_dasharray}" stroke-dashoffset="${homeSliceDashValues[0].stroke_dashoffset}"></circle>
                    <circle class="grid"    cx="40" cy="40" r="38" stroke-dasharray="${homeSliceDashValues[1].stroke_dasharray}" stroke-dashoffset="${homeSliceDashValues[1].stroke_dashoffset}"></circle>
                    <circle class="solar"   cx="40" cy="40" r="38" stroke-dasharray="${homeSliceDashValues[2].stroke_dasharray}" stroke-dashoffset="${homeSliceDashValues[2].stroke_dashoffset}"></circle>
                  `}
                </svg>
              </div>
              <span class="label"> Home </span>
            </div>
          </div>
          <div class="row">
            <div class="spacer"></div>
            <div class="circle-container battery">
              <div class="circle">
                <ha-svg-icon .path=${mdiBatteryHigh}></ha-svg-icon>
                ${
                  parseFloat(this._battery_extra_entity) >= 0
                    ? html`
                        <span class="battery-in">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowDown}
                          ></ha-svg-icon>
                          ${parseFloat(this._battery_extra_entity)} kW
                        </span>
                      `
                    : html`
                        <span class="battery-out">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowUp}
                          ></ha-svg-icon>
                          ${parseFloat(this._battery_extra_entity) * -1} kW
                        </span>
                      `
                }

              </div>
              <span class="label">Battery</span>
            </div>
            <div class="circle-container equipment-2">
              <div class="circle">
                <ha-svg-icon .path=${mdiCarSports}></ha-svg-icon>
                ${this._appliance2_state_entity}kW
              </div>
              <span class="label"> Equipment 2 </span>
            </div>
          </div>

          </div>
          <div class="lines high">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              ${svg`<path
                  id="generation-to-grid"
                  class="return"
                  d="M45,0 v15 c0,35 -10,30 -30,30 h-20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="generation-to-house"
                  class="solar"
                  d="M55,0 v15 c0,35 10,30 30,30 h20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="battery-to-house"
                  class="battery-house"
                  d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="battery-to-grid"
                  class="battery-from-grid"
                  d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="solar-to-battery"
                  class="battery-solar"
                  d="M50,0 V100"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  class="grid"
                  id="grid-to-house"
                  d="M0,50 H100"
                  vector-effect="non-scaling-stroke"
                >
                </path>
                <circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._grid_to_house_entity) / totalFlow) * 6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#grid-to-house"></mpath>
                  </animateMotion>
                </circle>
                <circle
                  r="1"
                  class="solar"
                  vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._generation_to_house_entity) /
                        totalFlow) *
                        6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#generation-to-house"></mpath>
                  </animateMotion>
                </circle>
                <circle
                  r="1"
                  class="battery-house"
                  vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._battery_to_house_entity) / totalFlow) *
                        6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#battery-to-house"></mpath>
                  </animateMotion>
                </circle>
                <circle
                  r="1"
                  class="battery-from-grid"
                  vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._battery_to_grid_entity) / totalFlow) * 6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#battery-to-grid"></mpath>
                  </animateMotion>
                </circle>
                <circle
                  r="1"
                  class="battery-solar"
                  vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._generation_to_battery_entity) /
                        totalFlow) *
                        6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#solar-to-battery"></mpath>
                  </animateMotion>
                </circle>
                <circle
                  r="1"
                  class="grid"
                  vector-effect="non-scaling-stroke"
                  >
                  <animateMotion
                    dur="${
                      6 -
                      (parseFloat(this._grid_to_house_entity) / totalFlow) * 6
                    }s"
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href="#grid-to-house"></mpath>
                  </animateMotion>
                </circle>

            `}
            </svg>
          </div>
        </div>
      </ha-card>
    `;
  }

  // card configuration
  static getConfigElement() {
    return document.createElement("tesla-power-distribution-editor");
  }

  static getStubConfig() {
    return {
      grid_to_house_entity: "1",
      generation_to_grid_entity: "1",
      generation_to_battery_entity: "1",
      generation_to_house_entity: "1",
      battery_to_house_entity: "1",
      battery_to_grid_entity: "1",
      battery_extra_entity: "1",
      house_extra_entity: "1",
      grid_extra_entity: "1",
      // generation_icon: "1",
      appliance1_state_entity: "1",
      appliance1_consumption_entity: "1",
      appliance2_state_entity: "1",
      appliance2_consumption_entity: "1",
    };
  }
}
