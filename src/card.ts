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
  mdiFire,
  mdiHome,
  mdiLeaf,
  mdiSolarPower,
  mdiTransmissionTower,
  mdiWater,
} from "@mdi/js";

interface Config extends LovelaceCardConfig {
  header: string;
  entity: string;
}

const CIRCLE_CIRCUMFERENCE = 238.76104;

export class TestlaPowerDistribution extends LitElement {
  // internal reactive states
  @state() private _header: string | typeof nothing;
  @state() private _entity: string;
  @state() private _name: string;
  @state() private _state: HassEntity;
  @state() private _status: string;

  // private property
  private _hass;

  // lifecycle interface
  setConfig(config: Config) {
    this._header = config.header === "" ? nothing : config.header;
    this._entity = config.entity;
    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._state = hass.states[this._entity];
    if (this._state) {
      this._status = this._state.state;
      let fn = this._state.attributes.friendly_name;
      this._name = fn ? fn : this._entity;
    }
  }

  // declarative part
  static styles = styles;

  render() {
    // let content: TemplateResult;

    console.log("HELLOOOOO");

    return html`
      <ha-card .header=${"My Tesla Distro"}>
        <div class="card-content">
          <div class="row">
            <div class="spacer"></div>
            <div class="circle-container solar">
              <span class="label"> Solar </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiSolarPower}></ha-svg-icon>
                0 kW
              </div>
            </div>
            <div class="circle-container equipment-1">
              <span class="label"> Equipment 1 </span>
              <div class="circle">
                <ha-svg-icon .path=${mdiSolarPower}></ha-svg-icon>
                0 kW
              </div>
            </div>
          </div>
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                <ha-svg-icon .path=${mdiTransmissionTower}></ha-svg-icon>
                <span class="return">
                  <ha-svg-icon
                    class="small"
                    .path=${mdiArrowLeft}
                  ></ha-svg-icon>
                  0 kW
                </span>
                <span class="consumption">
                  <ha-svg-icon
                    class="small"
                    .path=${mdiArrowRight}
                  ></ha-svg-icon>
                  0 kW
                </span>
              </div>
              <span class="label"> Grid </span>
            </div>
            <div class="circle-container home">
              <div class="circle">
                <ha-svg-icon .path=${mdiHome}></ha-svg-icon>
                0 kW
              </div>
              <span class="label"> Home </span>
            </div>
          </div>
          <div class="row">
            <div class="spacer"></div>
            <div class="circle-container battery">
              <div class="circle">
                <ha-svg-icon .path=${mdiBatteryHigh}></ha-svg-icon>
                <span class="battery-in">
                  <ha-svg-icon
                    class="small"
                    .path=${mdiArrowDown}
                  ></ha-svg-icon>
                  0 kW
                </span>
                <span class="battery-out">
                  <ha-svg-icon class="small" .path=${mdiArrowUp}></ha-svg-icon>
                  0 kW
                </span>
              </div>
              <span class="label">Battery</span>
            </div>
            <div class="circle-container equipment-2">
              <div class="circle">
                <ha-svg-icon .path=${mdiSolarPower}></ha-svg-icon>
                  0 kW
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
                  id="return"
                  class="return"
                  d="M45,0 v15 c0,35 -10,30 -30,30 h-20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="solar"
                  class="solar"
                  d="M55,0 v15 c0,35 10,30 30,30 h20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="battery-house"
                  class="battery-house"
                  d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="battery-grid"
                  class="battery-from-grid"
                  d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  id="battery-solar"
                  class="battery-solar"
                  d="M50,0 V100"
                  vector-effect="non-scaling-stroke"
                ></path>
                <path
                  class="grid"
                  id="grid"
                  d="M0,50 H100"
                  vector-effect="non-scaling-stroke"
                >
                </path>
                <circle
                  r="1"
                  class="return"
                  vector-effect="non-scaling-stroke"
                >`}
            </svg>
          </div>
        </div>
      </ha-card>
    `;
  }

  // event handling
  doToggle() {
    this._hass.callService("input_boolean", "toggle", {
      entity_id: this._entity,
    });
  }

  // card configuration
  static getConfigElement() {
    return document.createElement("tesla-power-distribution-editor");
  }

  static getStubConfig() {
    return {
      entity: "input_boolean.tcts",
      header: "",
    };
  }
}
