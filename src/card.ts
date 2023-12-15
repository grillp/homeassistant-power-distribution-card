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
  mdiTagHidden,
} from "@mdi/js";

interface Config extends LovelaceCardConfig {
  grid_to_house_id: string;
  generation_to_grid_id: string;
  generation_to_battery_id: string;
  generation_to_house_id: string;
  battery_to_house_id: string;
  battery_to_grid_id: string;
  battery_extra_id: string;
  house_extra_id: string;
  grid_extra_id: string;
  generation_icon: string;
  appliance1_state_id: string;
  appliance1_consumption_id: string;
  appliance2_state_id: string;
  appliance2_consumption_id: string;
}

interface DashValues {
  stroke_dashoffset: string;
  stroke_dasharray: string;
}

const CIRCLE_CIRCUMFERENCE = 238.76104;

export class TestlaPowerDistribution extends LitElement {
  // internal reactive states
  // @state() private _grid_to_house_entity: HassEntity;
  // @state() private _generation_to_grid_entity: HassEntity;
  // @state() private _generation_to_battery_entity: HassEntity;
  // @state() private _generation_to_house_entity: HassEntity;
  // @state() private _battery_to_house_entity: HassEntity;
  // @state() private _battery_to_grid_entity: HassEntity;
  // @state() private _battery_extra_entity: HassEntity;
  // @state() private _house_extra_entity: HassEntity;
  // @state() private _grid_extra_entity: HassEntity;
  // @state() private _appliance1_state_entity: HassEntity;
  // @state() private _appliance1_consumption_entity: HassEntity;
  // @state() private _appliance2_state_entity: HassEntity;
  // @state() private _appliance2_consumption_entity: HassEntity;

  // For Config
  @state() private _grid_to_house_id: string | null;
  @state() private _generation_to_grid_id: string | null;
  @state() private _generation_to_battery_id: string | null;
  @state() private _generation_to_house_id: string | null;
  @state() private _battery_to_house_id: string | null;
  @state() private _battery_to_grid_id: string | null;
  @state() private _battery_extra_id: string | null;
  @state() private _house_extra_id: string | null;
  @state() private _grid_extra_id: string | null;
  @state() private _appliance1_state_id: string | null;
  @state() private _appliance1_consumption_id: string | null;
  @state() private _appliance2_state_id: string | null;
  @state() private _appliance2_consumption_id: string | null;

  // Entity Values
  @state() private _grid_to_house_power: number;
  @state() private _generation_to_grid_power: number;
  @state() private _generation_to_battery_power: number;
  @state() private _generation_to_house_power: number;
  @state() private _battery_to_house_power: number;
  @state() private _battery_to_grid_power: number;
  @state() private _battery_extra_power: number;
  @state() private _house_extra_power: number;
  @state() private _grid_extra_power: number;
  @state() private _equipment1_power: number;
  @state() private _equipment2_power: number;
  @state() private _total_flow_power: number;

  // Totals
  @state() private _to_house_power: number;
  @state() private _from_grid_power: number;
  @state() private _from_generation_power: number;
  @state() private _to_appliance1_power: number;
  @state() private _to_appliance2_power: number;
  @state() private _to_battery_power: number;

  @state() private _generation_icon: string;

  // private property
  private _hass;

  // lifecycle interface
  setConfig(config: Config) {
    // this._header = config.header === "" ? nothing : config.header;
    // this._id = config.entity;
    console.log("setConfig");
    this._grid_to_house_id = config.grid_to_house_id;
    this._generation_to_grid_id = config.generation_to_grid_id;
    this._generation_to_battery_id = config.generation_to_battery_id;
    this._generation_to_house_id = config.generation_to_house_id;
    this._battery_to_house_id = config.battery_to_house_id;
    this._battery_to_grid_id = config.battery_to_grid_id;
    this._battery_extra_id = config.battery_extra_id;
    this._house_extra_id = config.house_extra_id;
    this._grid_extra_id = config.grid_extra_id;
    this._generation_icon = config.generation_icon;
    this._appliance1_state_id = config.appliance1_state_id;
    this._appliance1_consumption_id = config.appliance1_consumption_id;
    this._appliance2_state_id = config.appliance2_state_id;
    this._appliance2_consumption_id = config.appliance2_consumption_id;

    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  private extractFromId(entity_id: string): number {
    if (entity_id) {
      if (this._hass.states[entity_id]) {
        return Number(
          parseFloat(this._hass.states[entity_id].state).toFixed(1)
        );
      } else {
        return parseFloat(entity_id);
      }
    } else return 0;
  }

  set hass(hass: HomeAssistant) {
    console.log("Hass");
    this._hass = hass;

    this._grid_to_house_power = this.extractFromId(this._grid_to_house_id);
    this._grid_to_house_power = this.extractFromId(this._grid_to_house_id);
    this._generation_to_grid_power = this.extractFromId(
      this._generation_to_grid_id
    );
    this._generation_to_battery_power = this.extractFromId(
      this._generation_to_battery_id
    );
    this._generation_to_house_power = this.extractFromId(
      this._generation_to_house_id
    );
    this._battery_to_house_power = this.extractFromId(
      this._battery_to_house_id
    );
    this._battery_to_grid_power = this.extractFromId(this._battery_to_grid_id);
    this._battery_extra_power = this.extractFromId(this._battery_extra_id);
    this._house_extra_power = this.extractFromId(this._house_extra_id);
    this._grid_extra_power = this.extractFromId(this._grid_extra_id);
    this._to_appliance1_power = this.extractFromId(
      this._appliance1_consumption_id
    );
    this._to_appliance2_power = this.extractFromId(
      this._appliance2_consumption_id
    );

    this._to_house_power = Number(
      (
        this._battery_to_house_power +
        this._grid_to_house_power +
        this._generation_to_house_power
      ).toFixed(1)
    );
    this._from_grid_power = Number(
      (
        this._grid_to_house_power +
        -1 * this._battery_to_grid_power +
        -1 * this._generation_to_grid_power
      ).toFixed(1)
    );
    this._from_generation_power = Number(
      (
        this._generation_to_grid_power +
        this._generation_to_battery_power +
        this._generation_to_house_power
      ).toFixed(1)
    );
    this._to_battery_power = Number(
      (
        -1 * this._battery_to_house_power +
        this._generation_to_battery_power +
        -1 * this._battery_to_grid_power
      ).toFixed(1)
    );

    this._total_flow_power =
      this._grid_to_house_power +
      this._generation_to_grid_power +
      this._generation_to_battery_power +
      this._generation_to_house_power +
      this._battery_to_house_power +
      this._battery_to_grid_power;

    // this._state = hass.states[this._id];
    // if (this._state) {
    //   this._status = this._state.state;
    //   let fn = this._state.attributes.friendly_name;
    //   this._name = fn ? fn : this._id;
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

  private renderPowerAnnimation(
    power: number,
    style: string,
    href: string
  ): any {
    if (power > 0 && this._total_flow_power > 0) {
      console.log(`${style}:total ${this._total_flow_power}`);
      console.log(`${style}:power ${power}`);
      console.log(
        `${style}:ratio ${
          power / (this._total_flow_power == power ? 6 : this._total_flow_power)
        }`
      );
      console.log(
        `${style}:time ${
          6 -
          (power /
            (this._total_flow_power == power ? 6 : this._total_flow_power)) *
            6
        }s`
      );
    }

    return power > 0 && this._total_flow_power > 0
      ? svg`<circle
        r="1"
        class="${style}"
        vector-effect="non-scaling-stroke"
      >
        <animateMotion
          dur="${
            6 -
            (power /
              (this._total_flow_power == power ? 6 : this._total_flow_power)) *
              6
          }s"
          repeatCount="indefinite"
          calcMode="linear"
        >
          <mpath href="${href}"></mpath>
        </animateMotion>
      </circle>`
      : "";
  }

  render() {
    console.log("Render");

    let homeSliceDashValues: DashValues[] = this.calcStrokeDashValues([
      this._battery_to_house_power,
      this._grid_to_house_power,
      this._generation_to_house_power,
    ]);

    return html`
      <ha-card .header=${"My Tesla Distro"}>
        <div class="card-content">
          <div class="row">
            <div class="spacer"></div>
            <div class="circle-container solar">
              <span class="label"> Solar </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiSolarPower}></ha-svg-icon>
                ${this._from_generation_power} kW
              </div>
            </div>
            <div class="circle-container appliance-1">
              <span class="label"> Appliance 1 </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiCarSports}></ha-svg-icon>
                ${this._to_appliance1_power} kW
              </div>
            </div>
          </div>
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                <ha-svg-icon .path=${mdiTransmissionTower}></ha-svg-icon>
                ${
                  this._from_grid_power >= 0
                    ? html`
                        <span class="consumption">
                          ${this._from_grid_power > 0
                            ? html`<ha-svg-icon
                                class="small"
                                .path=${mdiArrowRight}
                              ></ha-svg-icon>`
                            : ""}
                          ${this._from_grid_power} kW
                        </span>
                      `
                    : html`
                        <span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowLeft}
                          ></ha-svg-icon>
                          ${this._from_grid_power * -1} kW
                        </span>
                      `
                }
              </div>
              <span class="label"> Grid </span>
            </div>
            <div class="circle-container home">
              <div class="circle">
                <ha-svg-icon .path=${mdiHome}></ha-svg-icon>
                ${this._to_house_power} kW
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
                  this._to_battery_power >= 0
                    ? html`
                        <span class="battery-in">
                          ${this._to_battery_power > 0
                            ? html`<ha-svg-icon
                                class="small"
                                .path=${mdiArrowDown}
                              ></ha-svg-icon>`
                            : ""}
                          ${this._to_battery_power} kW
                        </span>
                      `
                    : html`
                        <span class="battery-out">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowUp}
                          ></ha-svg-icon>
                          ${this._to_battery_power * -1} kW
                        </span>
                      `
                }

              </div>
              <span class="label">Battery</span>
            </div>
            <div class="circle-container appliance-2">
              <div class="circle">
                <ha-svg-icon .path=${mdiCarSports}></ha-svg-icon>
                ${this._to_appliance2_power} kW
              </div>
              <span class="label"> Appliance 2 </span>
            </div>
          </div>

          </div>
          <div class="lines high">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              ${svg`
                <path
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
                ${this.renderPowerAnnimation(
                  this._grid_to_house_power,
                  "grid",
                  "#grid-to-house"
                )}
                ${this.renderPowerAnnimation(
                  this._generation_to_house_power,
                  "solar",
                  "#generation-to-house"
                )}
                ${this.renderPowerAnnimation(
                  this._battery_to_house_power,
                  "battery-house",
                  "#battery-to-house"
                )}
                ${this.renderPowerAnnimation(
                  this._battery_to_grid_power,
                  "battery-from-grid",
                  "#battery-to-grid"
                )}
                ${this.renderPowerAnnimation(
                  this._generation_to_battery_power,
                  "battery-solar",
                  "#solar-to-battery"
                )}
                ${this.renderPowerAnnimation(
                  this._generation_to_grid_power,
                  "return",
                  "#generation-to-grid"
                )}
              `}
            </svg>
          </div>
          <div class="lines right">
             <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 50 100">
              ${svg`
                <path id="equipment-1" vector-effect="non-scaling-stroke" d="M25,25 v-20" class=""></path>
                <path id="equipment-2" vector-effect="non-scaling-stroke" d="M25,75 v20"" class=""></path>
                ${this.renderPowerAnnimation(
                  this._to_appliance1_power,
                  "grid",
                  "#equipment-1"
                )}
                ${this.renderPowerAnnimation(
                  this._to_appliance2_power,
                  "grid",
                  "#equipment-2"
                )}
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
      grid_to_house_id: "1",
      generation_to_grid_id: "1",
      generation_to_battery_id: "1",
      generation_to_house_id: "1",
      battery_to_house_id: "1",
      battery_to_grid_id: "1",
      battery_extra_id: "1",
      house_extra_id: "1",
      grid_extra_id: "1",
      // generation_icon: "1",
      appliance1_state_id: "1",
      appliance1_consumption_id: "1",
      appliance2_state_id: "1",
      appliance2_consumption_id: "1",
    };
  }
}
