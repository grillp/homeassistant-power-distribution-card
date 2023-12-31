import { html, LitElement, TemplateResult, svg, nothing } from "lit";
import { state } from "lit/decorators.js";
import { styles } from "./card.styles";
import {
  CUSTOM_CARD_ID,
  HasVisibility,
  PowerDistributionConfig,
  set_visibility,
} from "./common";
import { HomeAssistant, formatNumber } from "custom-card-helpers";
import { mdiArrowDown, mdiArrowLeft, mdiArrowRight, mdiArrowUp } from "@mdi/js";
interface DashValues {
  stroke_dashoffset: string;
  stroke_dasharray: string;
}

const CIRCLE_CIRCUMFERENCE = 238.76104;

export class PowerDistribution extends LitElement implements HasVisibility {
  @state() private _title: string | undefined;

  // Primary Power Entities
  @state() private _grid_to_load_power_id: string | undefined;
  @state() private _generation_to_grid_power_id: string | undefined;
  @state() private _generation_to_storage_power_id: string | undefined;
  @state() private _generation_to_load_power_id: string | undefined;
  @state() private _storage_to_load_power_id: string | undefined;
  @state() private _storage_to_grid_power_id: string | undefined;
  @state() private _load_top_power_id: string | undefined;
  @state() private _load_bottom_power_id: string | undefined;

  // Extra Info Entities
  private _grid_info_id: string | undefined;
  private _generation_info_id: string | undefined;
  private _storage_info_id: string | undefined;
  private _load_info_id: string | undefined;
  private _load_top_info_id: string | undefined;
  private _load_bottom_info_id: string | undefined;

  @state() private _grid_info_value: string | undefined;
  @state() private _generation_info_value: string | undefined;
  @state() private _storage_info_value: string | undefined;
  @state() private _load_info_value: string | undefined;
  @state() private _load_top_info_value: string | undefined;
  @state() private _load_bottom_info_value: string | undefined;

  // Extra Info Entities
  @state() private _grid_title: string | undefined;
  @state() private _load_title: string | undefined;
  @state() private _generation_title: string | undefined;
  @state() private _storage_title: string | undefined;
  @state() private _load_top_title: string | undefined;
  @state() private _load_bottom_title: string | undefined;

  // Entity Values
  @state() private _grid_to_load_power: number = 0;
  @state() private _generation_to_grid_power: number = 0;
  @state() private _generation_to_storage_power: number = 0;
  @state() private _generation_to_load_power: number = 0;
  @state() private _storage_to_load_power: number = 0;
  @state() private _storage_to_grid_power: number = 0;
  @state() private _total_flow_power: number = 0;

  // Totals
  @state() private _to_load_power: number = 0;
  @state() private _from_grid_power: number = 0;
  @state() private _from_generation_power: number = 0;
  @state() private _to_load_top_power: number = 0;
  @state() private _to_load_bottom_power: number = 0;
  @state() private _to_storage_power: number = 0;

  @state() private _generation_icon: string = "";
  @state() private _grid_icon: string = "";
  @state() private _storage_icon: string = "";
  @state() private _load_icon: string = "";
  @state() private _load_top_icon: string = "";
  @state() private _load_bottom_icon: string = "";

  // private property
  private _hass: any;
  public _has_generation: boolean = true;
  public _has_storage: boolean = true;
  public _has_load_top: boolean = true;
  public _has_load_bottom: boolean = true;

  _is_empty(value: string | undefined): boolean {
    return value === undefined || value == "";
  }

  setConfig(config: PowerDistributionConfig) {
    this._grid_to_load_power_id = config.grid_to_load_power_id;
    this._generation_to_grid_power_id = config.generation_to_grid_power_id;
    this._generation_to_storage_power_id =
      config.generation_to_storage_power_id;
    this._generation_to_load_power_id = config.generation_to_load_power_id;
    this._storage_to_load_power_id = config.storage_to_load_power_id;
    this._storage_to_grid_power_id = config.storage_to_grid_power_id;

    this._storage_info_id = config.storage_info_id;
    this._load_info_id = config.load_info_id;
    this._grid_info_id = config.grid_info_id;
    this._generation_info_id = config.generation_info_id;
    this._load_top_info_id = config.load_top_info_id;
    this._load_bottom_info_id = config.load_bottom_info_id;

    this._load_top_power_id = config.load_top_power_id;
    this._load_bottom_power_id = config.load_bottom_power_id;

    this._title = config.card_title;
    this._grid_title = config.grid_title;
    this._generation_title = config.generation_title;
    this._storage_title = config.storage_title;
    this._load_title = config.load_title;
    this._load_top_title = config.load_top_title;
    this._load_bottom_title = config.load_bottom_title;

    this._generation_icon = config.generation_icon || "mdi:solar-power";
    this._load_icon = config.load_icon || "mdi:home";
    this._storage_icon = config.storage_icon || "mdi:battery-high";
    this._grid_icon = config.grid_icon || "mdi:transmission-tower";
    this._load_top_icon = config.load_top_icon || "mdi:car-sports";
    this._load_bottom_icon = config.load_bottom_icon || "mdi:car-sports";
    set_visibility(this, config);

    this._has_generation = !(
      this._is_empty(config.generation_to_grid_power_id) &&
      this._is_empty(config.generation_to_storage_power_id) &&
      this._is_empty(config.generation_to_load_power_id)
    );
    this._has_storage = !(
      this._is_empty(config.storage_to_grid_power_id) &&
      this._is_empty(config.generation_to_storage_power_id) &&
      this._is_empty(config.storage_to_load_power_id)
    );
    this._has_load_top = !this._is_empty(config.load_top_power_id);
    this._has_load_bottom = !this._is_empty(config.load_bottom_power_id);

    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  private extractNumberFromId(entity_id: string | undefined): number {
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

  private extractStringFromId(
    entity_id: string | undefined
  ): string | undefined {
    if (entity_id) {
      if (this._hass.states[entity_id]) {
        return this._hass.formatEntityState(this._hass.states[entity_id]);
      } else {
        return entity_id;
      }
    } else return undefined;
  }

  set hass(hass: HomeAssistant) {
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

    this._storage_info_value = this.extractStringFromId(this._storage_info_id);
    this._load_info_value = this.extractStringFromId(this._load_info_id);
    this._grid_info_value = this.extractStringFromId(this._grid_info_id);
    this._generation_info_value = this.extractStringFromId(
      this._generation_info_id
    );
    this._load_top_info_value = this.extractStringFromId(
      this._load_top_info_id
    );
    this._load_bottom_info_value = this.extractStringFromId(
      this._load_bottom_info_id
    );

    this._to_load_top_power = this.extractNumberFromId(this._load_top_power_id);
    this._to_load_bottom_power = this.extractNumberFromId(
      this._load_bottom_power_id
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
  ): string | TemplateResult {
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

  render(): TemplateResult {
    let loadSliceDashValues: DashValues[] = this.calcStrokeDashValues([
      this._storage_to_load_power,
      this._grid_to_load_power,
      this._generation_to_load_power,
    ]);

    return html`
      <ha-card .header=${this._title}>
        <div class="card-content">
          ${
            this._has_generation || this._has_load_top
              ? html` <div class="row">
                  <div class="spacer"></div>
                  <div class="circle-container generation">
                    ${this._has_generation
                      ? html`
                          <span class="label">
                            ${this.extractStringFromId(this._generation_title)}
                          </span>
                          <div class="circle">
                            ${this._generation_info_value
                              ? html`<span class="info"
                                  >${this.extractStringFromId(
                                    this._generation_info_value
                                  )}</span
                                >`
                              : ""}
                            <ha-icon
                              class="small"
                              icon="${this._generation_icon}"
                            ></ha-icon
                            >${formatNumber(
                              this._from_generation_power,
                              this._hass.locale
                            )}
                            kW
                          </div>
                        `
                      : ""}
                  </div>
                  ${this._has_load_top
                    ? html` <div class="circle-container load_top">
                        <span class="label"> ${this.extractStringFromId(
                          this._load_top_title
                        )} </span>
                        <div class="circle">
                          ${
                            this._load_top_info_value
                              ? html`<span class="info"
                                  >${this.extractStringFromId(
                                    this._load_top_info_value
                                  )}</span
                                >`
                              : ""
                          }
                          <ha-icon class="small" icon="${
                            this._load_top_icon
                          }"></ha-icon>
                          ${formatNumber(
                            this._to_load_top_power,
                            this._hass.locale
                          )} kW
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
                  this._grid_info_value
                    ? html`<span class="info"
                        >${this.extractStringFromId(
                          this._grid_info_value
                        )}</span
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
                          ${formatNumber(
                            this._from_grid_power,
                            this._hass.locale
                          )}
                          kW
                        </span>
                      `
                    : html`
                        <span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${mdiArrowLeft}
                          ></ha-svg-icon
                          >${this._from_grid_power * -1} kW
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
                  this._load_info_value
                    ? html`<span class="info"
                        >${this.extractStringFromId(
                          this._load_info_value
                        )}</span
                      >`
                    : ""
                }
                <ha-icon class="small" icon="${this._load_icon}"></ha-icon>
                ${formatNumber(this._to_load_power, this._hass.locale)} kW
                <svg>
                  ${svg`
                    <circle class="storage" cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[0].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[0].stroke_dashoffset}"></circle>
                    <circle class="grid"    cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[1].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[1].stroke_dashoffset}"></circle>
                    <circle class="generation"   cx="40" cy="40" r="38" stroke-dasharray="${loadSliceDashValues[2].stroke_dasharray}" stroke-dashoffset="${loadSliceDashValues[2].stroke_dashoffset}"></circle>
                  `}
                </svg>
              </div>
              <span class="label"> ${this.extractStringFromId(
                this._load_title
              )} </span>
            </div>
          </div>
          ${
            this._has_storage || this._has_load_bottom
              ? html`
                  <div class="row">
                    <div class="spacer"></div>
                    ${this._has_storage
                      ? html` <div class="circle-container storage">
                          <div class="circle">
                            ${this._storage_info_value
                              ? html`<span class="info"
                                  >${this.extractStringFromId(
                                    this._storage_info_value
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
                                    ${formatNumber(
                                      this._to_storage_power,
                                      this._hass.locale
                                    )}
                                    kW
                                  </span>
                                `
                              : html`
                                  <span class="storage-out">
                                    <ha-svg-icon
                                      class="small"
                                      .path=${mdiArrowUp}
                                    ></ha-svg-icon>
                                    ${formatNumber(
                                      this._to_storage_power * -1,
                                      this._hass.locale
                                    )}
                                    kW
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
                    ${this._has_load_bottom
                      ? html`
                          <div class="circle-container load-bottom">
                            <div class="circle">
                              ${this._load_bottom_info_value
                                ? html`<span class="info"
                                    >${this.extractStringFromId(
                                      this._load_bottom_info_value
                                    )}</span
                                  >`
                                : ""}
                              <ha-icon
                                class="small"
                                icon="${this._load_bottom_icon}"
                              ></ha-icon>
                              ${formatNumber(
                                this._to_load_bottom_power,
                                this._hass.locale
                              )}
                              kW
                            </div>
                            <span class="label">
                              ${this.extractStringFromId(
                                this._load_bottom_title
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
            this._has_storage || this._has_load_bottom ? "high" : ""
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
                    class="generation"
                    d="M55,0 v15 c0,35 10,30 30,30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${this.renderPowerAnnimation(
                    this._generation_to_load_power,
                    "generation",
                    "#generation-to-load"
                  )}
                `
                : ""
            }
            ${
              this._has_generation && this._has_storage
                ? svg`
                    <path
                      id="generation-to-storage"
                      class="storage-generation"
                      d="M50,0 V100"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    ${this.renderPowerAnnimation(
                      this._generation_to_storage_power,
                      "storage-generation",
                      "#generation-to-storage"
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
                      class=""
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
            this._has_storage || this._has_load_bottom ? "high" : ""
          }"
          >
          ${
            this._has_load_top || this._has_load_bottom
              ? html`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  viewBox="0 0 50 100"
                >
                  ${this._has_load_top
                    ? svg`
                      <path id="load_top" vector-effect="non-scaling-stroke" d="M25,25 v-20" class=""></path>
                      ${this.renderPowerAnnimation(
                        this._to_load_top_power,
                        "grid",
                        "#load_top"
                      )}`
                    : ""}
                  ${this._has_load_bottom
                    ? svg`
                      <path id="load-bottom" vector-effect="non-scaling-stroke" d="M25,75 v20"" class=""></path>
                      ${this.renderPowerAnnimation(
                        this._to_load_bottom_power,
                        "grid",
                        "#load-bottom"
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
    return document.createElement(CUSTOM_CARD_ID + "-editor");
  }

  static getStubConfig() {
    return {
      card_title: "Power Distribution",
      grid_title: "Grid",
      generation_title: "Generation",
      storage_title: "Storage",
      load_title: "Load",
      load_top_title: "Load Top",
      load_bottom_title: "Load Bottom",
    };
  }
}
