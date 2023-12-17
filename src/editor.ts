import { css, html, LitElement, nothing, TemplateResult } from "lit";
import { state } from "lit/decorators/state";
import { property } from "lit/decorators/property";
import { HasVisibility, set_visibility } from "./helpers";
import {
  HomeAssistant,
  LovelaceCardEditor,
  LovelaceCardConfig,
} from "custom-card-helpers";

const includeDomains = ["sensor"];
const includeClasses = ["power"];
const includeUnits = ["kW"];

export class PowerDistributionEditor
  extends LitElement
  implements LovelaceCardEditor, HasVisibility
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() _config: LovelaceCardConfig;

  private _hass;
  @state() _has_generation: boolean;
  @state() _has_storage: boolean;
  @state() _has_load_top: boolean;
  @state() _has_load_bottom: boolean;
  @state() private _curTab?: string;
  private _curTabIndex = 0;

  firstUpdated() {
    // Elements can only be added to the local customElement registry after
    // createRenderRoot has run(which ScopedRegistryRoot handles).
    // It's definitely run before first render, so firstUpdated can be a good
    // place to start loading elements.
    this._curTab = "tab-entities";
  }

  setConfig(config: LovelaceCardConfig) {
    this._config = config;
    set_visibility(this, config);
    this.loadEntityPicker();
  }

  async loadEntityPicker() {
    if (!window.customElements.get("ha-entity-picker")) {
      const ch = await (window as any).loadCardHelpers();
      const c = await ch.createCardElement({ type: "entities", entities: [] });
      await c.constructor.getConfigElement();

      // Since ha-elements are not using scopedRegistry we can get a reference to
      // the newly loaded element from the global customElement registry...
      const haEntityPicker = window.customElements.get("ha-entity-picker");
    }
  }

  static styles = css`
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
    ha-icon-picker,
    ha-entity-picker,
    ha-textfield {
      display: block;
      margin-bottom: 16px;
    }

    .card-config paper-tabs {
      text-transform: uppercase;
      padding: 0px 20px;
      color: var(--primary-text-color);
      --paper-tabs-selection-bar-color: var(--primary-color);
      border-bottom: 1px solid
        var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
      padding-left: 0px;
      padding-right: 0px;
    }
  `;

  iconPicker(
    name: string,
    label: string,
    required: boolean = false
  ): TemplateResult {
    return html`
      <ha-icon-picker
        id="${name}"
        .hass=${this.hass}
        .value=${this._config[name] ?? ""}
        .label="${label} (${required ? "Required" : "Optional"})"
        @value-changed=${this._change}
      ></ha-icon-picker>
    `;
  }

  entityPicker(name: string, label: string): TemplateResult {
    return html`
      <ha-entity-picker
        id="${name}"
        .hass=${this.hass}
        .label="${label} (Optional)"
        .value=${this._config[name] ?? ""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `;
  }

  entityPickerForPower(
    name: string,
    label: string,
    required: boolean = false
  ): TemplateResult {
    return html`
      <ha-entity-picker
        id="${name}"
        .hass=${this.hass}
        .label="${label} (${required ? "Required" : "Optional"})"
        .includeDomains=${includeDomains}
        .includeDeviceClasses=${includeClasses}
        .includeUnitsOfMeasure=${includeUnits}
        .value=${this._config[name] ?? ""}
        @value-changed=${this._change}
        allow-custom-entity
      >
      </ha-entity-picker>
    `;
  }

  textField(
    name: string,
    label: string,
    required: boolean = false
  ): TemplateResult {
    return html`
      <ha-textfield
        id=${name}
        type="string"
        .value=${this._config[name] ?? ""}
        .label="${label} (${required ? "Required" : "Optional"})"
        name=${name}
        @change=${this._change}
        no-spinner
        .required="false"
        min="0"
      >
      </ha-textfield>
    `;
  }

  render() {
    let content: TemplateResult;
    switch (this._curTab) {
      case "tab-entities":
        content = html`
          <h2>Card Title</h2>
          ${this.textField(
            "card_title",
            `${this._config.grid_title || "Grid"} → ${
              this._config.load_title || "Load"
            }`
          )}
          <h2>Flow Entities (kW)</h2>
          ${this.entityPickerForPower(
            "grid_to_load_power_id",
            `${this._config.grid_title || "Grid"} → ${
              this._config.load_title || "Load"
            }`,
            true
          )}
          ${this.entityPickerForPower(
            "generation_to_grid_power_id",
            `${this._config.generation_title || "Generation"} → ${
              this._config.grid_title || "Grid"
            }`
          )}
          ${this.entityPickerForPower(
            "generation_to_storage_power_id",
            `${this._config.generation_title || "Generation"} → ${
              this._config.storage_title || "Storage"
            }`
          )}
          ${this.entityPickerForPower(
            "generation_to_load_power_id",
            `${this._config.generation_title || "Generation"} → ${
              this._config.load_title || "Load"
            }`
          )}
          ${this.entityPickerForPower(
            "storage_to_load_power_id",
            `${this._config.storage_title || "Storage"} → ${
              this._config.load_title || "Load"
            }`
          )}
          ${this.entityPickerForPower(
            "storage_to_grid_power_id",
            `${this._config.storage_title || "Storage"} → ${
              this._config.grid_title || "Grid"
            }`
          )}
          ${this.entityPickerForPower(
            "load_top_power_id",
            `${this._config.load_title || "Load"} → ${
              this._config.load_top_title || "Top Load"
            }`
          )}
          ${this.entityPicker(
            "load_bottom_power_id",
            `${this._config.load_title || "Load"} → ${
              this._config.load_bottom_title || "Bottom Load"
            }`
          )}
        `;
        break;
      case "tab-titles":
        content = html`<h2>Element Titles</h2>
          ${this.textField("grid_title", "Grid")}
          ${this.textField("load_title", "Load")}
          ${this._has_generation
            ? this.textField("generation_title", "Generation")
            : nothing}
          ${this._has_storage
            ? this.textField("storage_title", "Storage")
            : nothing}
          ${this._has_load_top
            ? this.textField("load_top_title", "Load Top")
            : nothing}
          ${this._has_load_bottom
            ? this.textField("load_bottom_title", "Load Bottom")
            : nothing}`;
        break;

      case "tab-extras":
        content = html` <h2>Element Extras</h2>
          ${this.entityPicker(
            "grid_info_id",
            `${this._config.grid_title || "Grid"}`
          )}
          ${this.entityPicker(
            "load_info_id",
            `${this._config.load_title || "Load"}`
          )}
          ${this._has_generation
            ? this.entityPicker(
                "generation_info_id",
                `${this._config.generation_title || "Generation"}`
              )
            : nothing}
          ${this._has_storage
            ? this.entityPicker(
                "storage_info_id",
                `${this._config.storage_title || "Storage"}`
              )
            : nothing}
          ${this._has_load_top
            ? this.entityPicker(
                "load_top_info_id",
                `${this._config.load_top_title || "Top Load"}`
              )
            : nothing}
          ${this._has_load_bottom
            ? this.entityPicker(
                "load_bottom_info_id",
                `${this._config.load_bottom_title || "Bottom Load"}`
              )
            : nothing}`;
        break;
      case "tab-icons":
        content = html`<h2>Element Icons</h2>
          ${this.iconPicker(
            "grid_icon",
            `${this._config.grid_title || "Grid"}`
          )}
          ${this.iconPicker(
            "load_icon",
            `${this._config.load_title || "Load"}`
          )}
          ${this._has_generation
            ? this.iconPicker(
                "generation_icon",
                `${this._config.generation_title || "Generation"}`
              )
            : nothing}
          ${this._has_storage
            ? this.iconPicker(
                "storage_icon",
                `${this._config.storage_title || "Storage"}`
              )
            : nothing}
          ${this._has_load_top
            ? this.iconPicker(
                "load_top_icon",
                `${this._config.load_top_title || "Top Load"}`
              )
            : nothing}
          ${this._has_load_bottom
            ? this.iconPicker(
                "load_bottom_icon",
                `${this._config.load_bottom_title || "Bottom Load"}`
              )
            : nothing}`;
        break;
    }

    return html` <div class="card-config">
      <paper-tabs
        scrollable
        hide-scroll-buttons
        .selected=${this._curTabIndex}
        @selected-item-changed=${this._handleTabSelected}
      >
        <paper-tab id="tab-entities" dialogInitialFocus> Entities </paper-tab>
        <paper-tab id="tab-titles"> Titles </paper-tab>
        <paper-tab id="tab-extras"> Extra Info </paper-tab>
        <paper-tab id="tab-icons"> Icons </paper-tab>
      </paper-tabs>
      ${content}
    </div>`;
  }

  _handleTabSelected(ev: CustomEvent): void {
    if (!ev.detail.value) {
      return;
    }
    this._curTab = ev.detail.value.id;
  }

  _is_empty(value: string | undefined): boolean {
    return value === undefined || value == "";
  }

  _nameChanged(ev: Event) {
    const target = ev.target as HTMLInputElement;
  }

  _change(ev: Event) {
    const target = ev.target as HTMLInputElement;
    ev.stopPropagation();
    // this._config is readonly, copy needed
    var newValue: string | undefined = target.value;
    if (newValue === this._config[target.id]) return;
    const newConfig = Object.assign({}, this._config);
    if (newValue === "" || newValue == undefined) delete newConfig[target.id];
    else newConfig[target.id] = target.value;
    set_visibility(this, newConfig);
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
