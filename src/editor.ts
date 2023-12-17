import { css, html, LitElement, nothing, TemplateResult } from "lit";
import { state } from "lit/decorators/state";
import { property } from "lit/decorators/property";
import {
  HomeAssistant,
  LovelaceCardEditor,
  LovelaceCardConfig,
} from "custom-card-helpers";

export class TestlaPowerDistributionEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() _config: LovelaceCardConfig;

  private _hass;
  @state() _has_generation: boolean;
  @state() _has_storage: boolean;
  @state() _has_load_top: boolean;
  @state() _has_load_bottom: boolean;

  async setConfig(config: LovelaceCardConfig) {
    this._config = config;
    this._set_visibility(config);

    console.log("before");
    console.log(customElements.get("ha-textfield"));
    if (!customElements.get("ha-textfield")) {
      const cardHelpers = await (window as any).loadCardHelpers();
      const entitiesCard = await cardHelpers.createCardElement({
        type: "entities",
        entities: [],
      }); // A valid config avoids errors
    }
    console.log("after");
    console.log(customElements.get("ha-textfield"));
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
    ha-textfield {
      display: block;
      margin-bottom: 16px;
    }
  `;

  iconPicker(name: string, label: string): TemplateResult {
    return html`
      <ha-icon-picker
        id="${name}"
        .hass=${this.hass}
        .value=${this._config[name] ?? ""}
        .label=${label}
        @value-changed=${this._change}
      ></ha-icon-picker>
    `;
  }

  iconPickerRow(name: string, label: string): TemplateResult {
    return html`
      <div class="row">
        <label class="label cell" for="{${name}}">${label}</label>
        ${this.iconPicker(name, label)}
      </div>
    `;
  }

  input(name: string, label: string): TemplateResult {
    return html`
      <ha-textfield
        id=${name}
        type="string"
        inputmode="numeric"
        .value=${this._config[name] ?? ""}
        .label=${label}
        name="days"
        @change=${this._change}
        no-spinner
        .required="false"
        min="0"
      >
      </ha-textfield>
    `;
  }

  inputRow(name: string, label: string): TemplateResult {
    return html`
      <div class="row">
        <label class="label cell" for="{${name}}">${label}</label>
        <input
          @change=${this._change}
          id=${name}
          value="${this._config[name]}">
        </input>
      </div>
    `;
  }

  render() {
    return html`
      <div class="card-config">
        <h2>Power Entities</h2>
        ${this.input(
          "grid_to_load_power_id",
          `${this._config.grid_title || "Grid"} → ${
            this._config.load_title || "Load"
          }`
        )}
        ${this.input(
          "generation_to_grid_power_id",
          `${this._config.generation_title || "Generation"} → ${
            this._config.grid_title || "Grid"
          }`
        )}
        ${this.input(
          "generation_to_storage_power_id",
          `${this._config.generation_title || "Generation"} → ${
            this._config.storage_title || "Storage"
          }`
        )}
        ${this.input(
          "generation_to_load_power_id",
          `${this._config.generation_title || "Generation"} → ${
            this._config.load_title || "Load"
          }`
        )}
        ${this.input(
          "storage_to_load_power_id",
          `${this._config.storage_title || "Storage"} → ${
            this._config.load_title || "Load"
          }`
        )}
        ${this.input(
          "storage_to_grid_power_id",
          `${this._config.storage_title || "Storage"} → ${
            this._config.grid_title || "Grid"
          }`
        )}
        ${this.input(
          "load_top_power_id",
          `${this._config.load_title || "Load"} → ${
            this._config.load_top_title || "Top Load"
          }`
        )}
        ${this.input(
          "load_bottom_power_id",
          `${this._config.load_title || "Load"} → ${
            this._config.load_bottom_title || "Bottom Load"
          }`
        )}
        <h2>Element Titles</h2>
        Can be an entity id or a positive numeric value.
        ${this.input("grid_title", "Grid")} ${this.input("load_title", "Load")}
        ${this._has_generation
          ? this.input("generation_title", "Generation")
          : nothing}
        ${this._has_storage ? this.input("storage_title", "Storage") : nothing}
        ${this._has_load_top
          ? this.input("load_top_title", "Load Top")
          : nothing}
        ${this._has_load_bottom
          ? this.input("load_bottom_title", "Load Bottom")
          : nothing}
        <h2>Element Extra Info</h2>
        Appears above the Icon in the Circle. Can be an entity id or a string.
        ${this.input("grid_info_id", `${this._config.grid_title || "Grid"}`)}
        ${this.input("load_info_id", `${this._config.load_title || "Load"}`)}
        ${this._has_generation
          ? this.input(
              "generation_info_id",
              `${this._config.generation_title || "Generation"}`
            )
          : nothing}
        ${this._has_storage
          ? this.input(
              "storage_info_id",
              `${this._config.storage_title || "Storage"}`
            )
          : nothing}
        ${this._has_load_top
          ? this.input(
              "load_top_info_id",
              `${this._config.load_top_title || "Top Load"}`
            )
          : nothing}
        ${this._has_load_bottom
          ? this.input(
              "load_bottom_info_id",
              `${this._config.load_bottom_title || "Bottom Load"}`
            )
          : nothing}

        <h2>Element Icons</h2>
        ${this.iconPicker("grid_icon", `${this._config.grid_title || "Grid"}`)}
        ${this.iconPicker("load_icon", `${this._config.load_title || "Load"}`)}
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
          : nothing}
      </div>
    `;
  }

  _render() {
    return html` <form class="table">
      <div class="row">
        <h2>Card Title</h2>
        Entity or string
      </div>
      ${this.input("card_title", "Title")}
      <div class="row">
        <h2>Power Entites</h2>
        Can be an entity id or a positive numeric value. All expected to in kW.
      </div>
      ${this.inputRow(
        "grid_to_load_power_id",
        `${this._config.grid_title || "Grid"} → ${
          this._config.load_title || "Load"
        }`
      )}
      ${this.inputRow(
        "generation_to_grid_power_id",
        `${this._config.generation_title || "Generation"} → ${
          this._config.grid_title || "Grid"
        }`
      )}
      ${this.inputRow(
        "generation_to_storage_power_id",
        `${this._config.generation_title || "Generation"} → ${
          this._config.storage_title || "Storage"
        }`
      )}
      ${this.inputRow(
        "generation_to_load_power_id",
        `${this._config.generation_title || "Generation"} → ${
          this._config.load_title || "Load"
        }`
      )}
      ${this.inputRow(
        "storage_to_load_power_id",
        `${this._config.storage_title || "Storage"} → ${
          this._config.load_title || "Load"
        }`
      )}
      ${this.inputRow(
        "storage_to_grid_power_id",
        `${this._config.storage_title || "Storage"} → ${
          this._config.grid_title || "Grid"
        }`
      )}
      ${this.inputRow(
        "load_top_power_id",
        `${this._config.load_title || "Load"} → ${
          this._config.load_top_title || "Top Load"
        }`
      )}
      ${this.inputRow(
        "load_bottom_power_id",
        `${this._config.load_title || "Load"} → ${
          this._config.load_bottom_title || "Bottom Load"
        }`
      )}
      <div class="row">
        <h2>Titles</h2>
        Can be an entity id or a positive numeric value.
      </div>
      ${this.inputRow("grid_title", "Grid")}
      ${this.inputRow("load_title", "Load")}
      ${this._has_generation
        ? this.inputRow("generation_title", "Generation")
        : nothing}
      ${this._has_storage ? this.inputRow("storage_title", "Storage") : nothing}
      ${this._has_load_top
        ? this.inputRow("load_top_title", "Load Top")
        : nothing}
      ${this._has_load_bottom
        ? this.inputRow("load_bottom_title", "Load Bottom")
        : nothing}
      <div class="row">
        <h2>Extra Info</h2>
        Appears above the Icon in the Circle. Can be an entity id or a string.
      </div>
      ${this.inputRow("grid_info_id", `${this._config.grid_title || "Grid"}`)}
      ${this.inputRow("load_info_id", `${this._config.load_title || "Load"}`)}
      ${this._has_generation
        ? this.inputRow(
            "generation_info_id",
            `${this._config.generation_title || "Generation"}`
          )
        : nothing}
      ${this._has_storage
        ? this.inputRow(
            "storage_info_id",
            `${this._config.storage_title || "Storage"}`
          )
        : nothing}
      ${this._has_load_top
        ? this.inputRow(
            "load_top_info_id",
            `${this._config.load_top_title || "Top Load"}`
          )
        : nothing}
      ${this._has_load_bottom
        ? this.inputRow(
            "load_bottom_info_id",
            `${this._config.load_bottom_title || "Bottom Load"}`
          )
        : nothing}

      <div class="row"><h2>Icons</h2></div>
      ${this.iconPickerRow("grid_icon", `${this._config.grid_title || "Grid"}`)}
      ${this.iconPickerRow("load_icon", `${this._config.load_title || "Load"}`)}
      ${this._has_generation
        ? this.iconPickerRow(
            "generation_icon",
            `${this._config.generation_title || "Generation"}`
          )
        : nothing}
      ${this._has_storage
        ? this.iconPickerRow(
            "storage_icon",
            `${this._config.storage_title || "Storage"}`
          )
        : nothing}
      ${this._has_load_top
        ? this.iconPickerRow(
            "load_top_icon",
            `${this._config.load_top_title || "Top Load"}`
          )
        : nothing}
      ${this._has_load_bottom
        ? this.iconPickerRow(
            "load_bottom_icon",
            `${this._config.load_bottom_title || "Bottom Load"}`
          )
        : nothing}
    </form>`;
  }

  _is_empty(value: string | undefined): boolean {
    return value === undefined || value == "";
  }

  _set_visibility(config: any) {
    console.log("Set Visibility");
    console.log(config);
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

    console.log(this._has_generation);
    console.log(this._has_storage);
    console.log(this._has_load_top);
    console.log(this._has_load_bottom);
  }

  _nameChanged(ev: Event) {
    const target = ev.target as HTMLInputElement;
    console.log(this.hass);
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
    this._set_visibility(newConfig);
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
