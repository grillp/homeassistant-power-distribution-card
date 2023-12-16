import { html, LitElement, TemplateResult, svg, nothing } from "lit";
import { styles } from "./card.styles";
import { state } from "lit/decorators/state";

// import { formatNumber } from "../../../../common/number/format_number";

import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";
import { mdiArrowDown, mdiArrowLeft, mdiArrowRight, mdiArrowUp } from "@mdi/js";

interface Config extends LovelaceCardConfig {
  grid_to_load_id: string;
  generation_to_grid_id: string;
  generation_to_storage_id: string;
  generation_to_load_id: string;
  storage_to_load_id: string;
  storage_to_grid_id: string;
  equipment1_power_id: string;
  equipment2_power_id: string;

  grid_info_id: string;
  storage_info_id: string;
  load_info_id: string;
  generation_info_id: string;
  equipment1_info_id: string;
  equipment2_info_id: string;

  grid_title: string;
  generation_title: string;
  storage_title: string;
  load_title: string;
  equipment1_title: string;
  equipment2_title: string;

  grid_icon: string;
  generation_icon: string;
  storage_icon: string;
  load_icon: string;
  equipment1_icon: string;
  equipment2_icon: string;
}

interface DashValues {
  stroke_dashoffset: string;
  stroke_dasharray: string;
}

const CIRCLE_CIRCUMFERENCE = 238.76104;

export class TestlaPowerDistribution extends LitElement {
  // Primary Power Entities
  @state() private _grid_to_load_power_id: string | null;
  @state() private _generation_to_grid_power_id: string | null;
  @state() private _generation_to_storage_power_id: string | null;
  @state() private _generation_to_load_power_id: string | null;
  @state() private _storage_to_load_power_id: string | null;
  @state() private _storage_to_grid_power_id: string | null;
  @state() private _equipment1_power_id: string | null;
  @state() private _equipment2_power_id: string | null;

  // Extra Info Entities
  @state() private _grid_info_id: string | null;
  @state() private _generation_info_id: string | null;
  @state() private _storage_info_id: string | null;
  @state() private _load_info_id: string | null;
  @state() private _equipment1_info_id: string | null;
  @state() private _equipment2_info_id: string | null;

  // Extra Info Entities
  @state() private _card_title: string | null;
  @state() private _grid_title: string | null;
  @state() private _load_title: string | null;
  @state() private _generation_title: string | null;
  @state() private _storage_title: string | null;
  @state() private _equipment1_title: string | null;
  @state() private _equipment2_title: string | null;

  // Entity Values
  @state() private _grid_to_load_power: number;
  @state() private _generation_to_grid_power: number;
  @state() private _generation_to_storage_power: number;
  @state() private _generation_to_load_power: number;
  @state() private _storage_to_load_power: number;
  @state() private _storage_to_grid_power: number;
  @state() private _total_flow_power: number;

  // Totals
  @state() private _to_load_power: number;
  @state() private _from_grid_power: number;
  @state() private _from_generation_power: number;
  @state() private _to_equipment1_power: number;
  @state() private _to_equipment2_power: number;
  @state() private _to_storage_power: number;

  @state() private _generation_icon: string;
  @state() private _grid_icon: string;
  @state() private _storage_icon: string;
  @state() private _load_icon: string;
  @state() private _equipment1_icon: string;
  @state() private _equipment2_icon: string;

  // private property
  private _hass;
  private _has_generation: boolean;
  private _has_storage: boolean;
  private _has_equipment1: boolean;
  private _has_equipment2: boolean;

  // lifecycle interface
  setConfig(config: Config) {
    // this._header = config.header === "" ? nothing : config.header;
    // this._id = config.entity;
    console.log("setConfig");
    this._grid_to_load_power_id = config.grid_to_load_id;
    this._generation_to_grid_power_id = config.generation_to_grid_id;
    this._generation_to_storage_power_id = config.generation_to_storage_id;
    this._generation_to_load_power_id = config.generation_to_load_id;
    this._storage_to_load_power_id = config.storage_to_load_id;
    this._storage_to_grid_power_id = config.storage_to_grid_id;

    this._storage_info_id = config.storage_info_id;
    this._load_info_id = config.load_info_id;
    this._grid_info_id = config.grid_info_id;
    this._generation_info_id = config.generation_info_id;
    this._equipment1_info_id = config.equipment1_info_id;
    this._equipment1_power_id = config.equipment1_power_id;
    this._equipment2_info_id = config.equipment2_info_id;
    this._equipment2_power_id = config.equipment2_power_id;

    this._card_title = config.card_title;
    this._grid_title = config.grid_title;
    this._generation_title = config.generation_title;
    this._storage_title = config.storage_title;
    this._load_title = config.load_title;
    this._equipment1_title = config.equipment1_title;
    this._equipment2_title = config.equipment2_title;

    this._generation_icon = config.generation_icon || "mdi:solar-power";
    this._load_icon = config.load_icon || "mdi:home";
    this._storage_icon = config.storage_icon || "mdi:battery-high";
    this._grid_icon = config.grid_icon || "mdi:transmission-tower";
    this._equipment1_icon = config.equipment1_icon || "mdi:car-sports";
    this._equipment2_icon = config.equipment2_icon || "mdi:car-sports";

    this._has_generation = !(
      this._generation_to_grid_power_id === "" &&
      this._generation_to_storage_power_id === "" &&
      this._generation_to_load_power_id == ""
    );
    this._has_storage = !(
      this._storage_to_grid_power_id === "" &&
      this._generation_to_storage_power_id === "" &&
      this._storage_to_load_power_id == ""
    );
    this._has_equipment1 = !(this._equipment1_power_id === "");
    this._has_equipment2 = !(this._equipment2_power_id === "");

    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  private extractNumberFromId(entity_id: string): number {
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

  private extractStringFromId(entity_id: string): string {
    if (entity_id) {
      if (this._hass.states[entity_id]) {
        return this._hass.formatEntityState(this._hass.states[entity_id]);
      } else {
        return entity_id;
      }
    } else return undefined;
  }

  set hass(hass: HomeAssistant) {
    console.log("Hass");
    this._hass = hass;

    this._grid_to_load_power = this.extractNumberFromId(
      this._grid_to_load_power_id
    );
    this._grid_to_load_power = this.extractNumberFromId(
      this._grid_to_load_power_id
    );
    this._generation_to_grid_power = this.extractNumberFromId(
      this._generation_to_grid_power_id
    );
    this._generation_to_storage_power = this.extractNumberFromId(
      this._generation_to_storage_power_id
    );
    this._generation_to_load_power = this.extractNumberFromId(
      this._generation_to_load_power_id
    );
    this._storage_to_load_power = this.extractNumberFromId(
      this._storage_to_load_power_id
    );
    this._storage_to_grid_power = this.extractNumberFromId(
      this._storage_to_grid_power_id
    );
    this._storage_info_id = this.extractStringFromId(this._storage_info_id);
    this._load_info_id = this.extractStringFromId(this._load_info_id);
    this._grid_info_id = this.extractStringFromId(this._grid_info_id);
    this._to_equipment1_power = this.extractNumberFromId(
      this._equipment1_power_id
    );
    this._to_equipment2_power = this.extractNumberFromId(
      this._equipment2_power_id
    );

    this._to_load_power = Number(
      (
        this._storage_to_load_power +
        this._grid_to_load_power +
        this._generation_to_load_power
      ).toFixed(1)
    );
    this._from_grid_power = Number(
      (
        this._grid_to_load_power +
        -1 * this._storage_to_grid_power +
        -1 * this._generation_to_grid_power
      ).toFixed(1)
    );
    this._from_generation_power = Number(
      (
        this._generation_to_grid_power +
        this._generation_to_storage_power +
        this._generation_to_load_power
      ).toFixed(1)
    );
    this._to_storage_power = Number(
      (
        -1 * this._storage_to_load_power +
        this._generation_to_storage_power +
        -1 * this._storage_to_grid_power
      ).toFixed(1)
    );

    this._total_flow_power =
      this._grid_to_load_power +
      this._generation_to_grid_power +
      this._generation_to_storage_power +
      this._generation_to_load_power +
      this._storage_to_load_power +
      this._storage_to_grid_power;

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

    let loadSliceDashValues: DashValues[] = this.calcStrokeDashValues([
      this._storage_to_load_power,
      this._grid_to_load_power,
      this._generation_to_load_power,
    ]);

    return html`
      <ha-card .header=${this._card_title}>
        <div class="card-content">
          ${
            this._has_generation || this._has_equipment1
              ? html` <div class="row">
                  <div class="spacer"></div>
                  <div class="circle-container solar">
                    ${this._has_generation
                      ? html`
                          <span class="label">
                            ${this.extractStringFromId(this._generation_title)}
                          </span>
                          <div class="circle">
                            ${this._generation_info_id
                              ? html`<span
                                  >${this.extractStringFromId(
                                    this._generation_info_id
                                  )}</span
                                >`
                              : ""}
                            <ha-icon
                              class="small"
                              icon="${this._generation_icon}"
                            ></ha-icon>
                            ${this._from_generation_power} kW
                          </div>
                        `
                      : ""}
                  </div>
                  ${this._has_equipment1
                    ? html` <div class="circle-container equipment1">
                        <span class="label"> ${this.extractStringFromId(
                          this._equipment1_title
                        )} </span>
                        <div class="circle">
                          ${
                            this._equipment1_info_id
                              ? html`<span
                                  >${this.extractStringFromId(
                                    this._equipment1_info_id
                                  )}</span
                                >`
                              : ""
                          }
                          <ha-icon class="small" icon="${
                            this._equipment1_icon
                          }"></ha-icon>
                          ${this._to_equipment1_power} kW
                        </div>
                      </div>
                </div>`
                    : html`<div class="spacer"></div>`}
                </div>`
              : ""
          }
          <div class="row">
            <div class="circle-container grid">
              <div class="circle">
                ${
                  this._grid_info_id
                    ? html`<span
                        >${this.extractStringFromId(this._grid_info_id)}</span
                      >`
                    : ""
                }
                <ha-icon class="small" icon="${this._grid_icon}"></ha-icon>
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
              <span class="label"> ${this.extractStringFromId(
                this._grid_title
              )} </span>
            </div>
            <div class="circle-container load">
              <div class="circle">
                ${
                  this._load_info_id
                    ? html`<span
                        >${this.extractStringFromId(this._load_info_id)}</span
                      >`
                    : ""
                }
                <ha-icon class="small" icon="${this._load_icon}"></ha-icon>
                ${this._to_load_power} kW
                <svg>
                  ${svg`
                    <circle class="storage" cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[0].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[0].stroke_dashoffset}"></circle>
                    <circle class="grid"    cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[1].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[1].stroke_dashoffset}"></circle>
                    <circle class="solar"   cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[2].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[2].stroke_dashoffset}"></circle>
                  `}
                </svg>
              </div>
              <span class="label"> ${this.extractStringFromId(
                this._load_title
              )} </span>
            </div>
          </div>
          ${
            this._has_storage || this._has_equipment2
              ? html`
                  <div class="row">
                    <div class="spacer"></div>
                    ${this._has_storage
                      ? html` <div class="circle-container storage">
                          <div class="circle">
                            ${this._storage_info_id
                              ? html`<span
                                  >${this.extractStringFromId(
                                    this._storage_info_id
                                  )}</span
                                >`
                              : ""}
                            <ha-icon
                              class="small"
                              icon="${this._storage_icon}"
                            ></ha-icon>
                            ${this._to_storage_power >= 0
                              ? html`
                                  <span class="storage-in">
                                    ${this._to_storage_power > 0
                                      ? html`<ha-svg-icon
                                          class="small"
                                          .path=${mdiArrowDown}
                                        ></ha-svg-icon>`
                                      : ""}
                                    ${this._to_storage_power} kW
                                  </span>
                                `
                              : html`
                                  <span class="storage-out">
                                    <ha-svg-icon
                                      class="small"
                                      .path=${mdiArrowUp}
                                    ></ha-svg-icon>
                                    ${this._to_storage_power * -1} kW
                                  </span>
                                `}
                          </div>
                          <span class="label"
                            >${this.extractStringFromId(
                              this._storage_title
                            )}</span
                          >
                        </div>`
                      : html`<div class="spacer"></div>`}
                    ${this._has_equipment2
                      ? html`
                          <div class="circle-container equipment2">
                            <div class="circle">
                              ${this._equipment2_info_id
                                ? html`<span
                                    >${this.extractStringFromId(
                                      this._equipment2_info_id
                                    )}</span
                                  >`
                                : ""}
                              <ha-icon
                                class="small"
                                icon="${this._equipment2_icon}"
                              ></ha-icon>
                              ${this._to_equipment2_power} kW
                            </div>
                            <span class="label">
                              ${this.extractStringFromId(
                                this._equipment2_title
                              )}
                            </span>
                          </div>
                        `
                      : html`<div class="spacer"></div>`}
                  </div>
                `
              : ""
          }
        </div>
        <div
          class="lines ${
            this._has_storage || this._has_equipment2 ? "high" : ""
          }"
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            ${svg`
                <path
                  class="grid"
                  id="grid-to-load"
                  d="M0,50 H100"
                  vector-effect="non-scaling-stroke"
                >
                </path>
                ${this.renderPowerAnnimation(
                  this._grid_to_load_power,
                  "grid",
                  "#grid-to-load"
                )}
            `}
            ${
              this._has_generation
                ? svg`
                  <path
                    id="generation-to-grid"
                    class="return"
                    d="M45,0 v15 c0,35 -10,30 -30,30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(
                    this._generation_to_grid_power,
                    "return",
                    "#generation-to-grid"
                  )}
                  <path
                    id="generation-to-load"
                    class="solar"
                    d="M55,0 v15 c0,35 10,30 30,30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(
                    this._generation_to_load_power,
                    "solar",
                    "#generation-to-load"
                  )}
                `
                : ""
            }
            ${
              this._has_generation && this._has_storage
                ? svg`
                    <path
                      id="solar-to-storage"
                      class="storage-solar"
                      d="M50,0 V100"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(
                      this._generation_to_storage_power,
                      "storage-solar",
                      "#solar-to-storage"
                    )}
                  `
                : ""
            }
            ${
              this._has_storage
                ? svg`
                    <path
                      id="storage-to-load"
                      class="storage-load"
                      d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(
                      this._storage_to_load_power,
                      "storage-load",
                      "#storage-to-load"
                    )}
                    <path
                      id="storage-to-grid"
                      class="storage-from-grid"
                      d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(
                      this._storage_to_grid_power,
                      "storage-from-grid",
                      "#storage-to-grid"
                    )}
                  `
                : ""
            }
          </svg>
        </div>
        <div
          class="lines right ${
            this._has_storage || this._has_equipment2 ? "high" : ""
          }"
          >
          ${
            this._has_equipment1 || this._has_equipment2
              ? html`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 50 100"
                >
                  ${this._has_equipment1
                    ? svg`
                      <path id="equipment1" vector-effect="non-scaling-stroke" d="M25,25 v-20" class=""></path>
                      ${this.renderPowerAnnimation(
                        this._to_equipment1_power,
                        "grid",
                        "#equipment1"
                      )}`
                    : ""}
                  ${this._has_equipment2
                    ? svg`
                      <path id="equipment2" vector-effect="non-scaling-stroke" d="M25,75 v20"" class=""></path>
                      ${this.renderPowerAnnimation(
                        this._to_equipment2_power,
                        "grid",
                        "#equipment2"
                      )}`
                    : ""}
                </svg>`
              : ""
          }
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
      grid_to_load_id: "1",
      generation_to_grid_id: "1",
      generation_to_storage_id: "1",
      generation_to_load_id: "1",
      storage_to_load_id: "1",
      storage_to_grid_id: "1",
      storage_info_id: "1",
      load_info_id: "1",
      grid_info_id: "1",
      // generation_icon: "1",
      equipment1_state_id: "1",
      equipment1_power_id: "1",
      equipment2_state_id: "1",
      equipment2_power_id: "1",

      card_title: "Instant Power!",
      grid_title: "Grid",
      generation_title: "Solar",
      storage_title: "Storage",
      load_title: "House",
      equipment1_title: "Appliance 1",
      equipment2_title: "Appliance 2",
    };
  }
}
