import { css, html, LitElement, TemplateResult } from "lit";
import { state } from "lit/decorators/state";
import { property } from "lit/decorators/property";
import { HomeAssistant } from "custom-card-helpers";

export class TestlaPowerDistributionEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() _config;

  private _hass;

  setConfig(config) {
    this._config = config;
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
  `;

  iconPickerRow(name: string): TemplateResult {
    return html`
      <div class="row">
        <label class="label cell" for="{${name}}">${name}</label>
        <ha-icon-picker
          id="${name}"
          .hass=${this.hass}
          .value=${this._config[name]}
          @value-changed=${this._change}
        ></ha-icon-picker>
      </div>
    `;
  }

  inputRow(name: string, label: string): TemplateResult {
    return html`
      <div class="row">
        </div>
        <label class="label cell" for="{${name}}">${label}</label>
        <input
          @change=${this._change}
          id="${name}"
          value="${this._config[name]}">
        </input>
      </div>
    `;
  }

  render() {
    return html` <form class="table">
      <div class="row">
        <h2>Card Title</h2>
        Entity or string
      </div>
      ${this.inputRow("card_title", "Title")}
      <div class="row">
        <h2>Power Entites</h2>
        Can be an entity id or a positive numeric value. All expected to in kW.
      </div>
      ${this.inputRow("grid_to_load_id", "Grid → Load")}
      ${this.inputRow("generation_to_grid_id", "Generation → Grid")}
      ${this.inputRow("generation_to_storage_id", "Generation → Storage")}
      ${this.inputRow("generation_to_load_id", "Generation → Load")}
      ${this.inputRow("storage_to_load_id", "Storage → Load")}
      ${this.inputRow("storage_to_grid_id", "Storage → Grid")}
      ${this.inputRow("load_top_power_id", "Load → Top Load")}
      ${this.inputRow("load_bottom_power_id", "Load → Bottom Load")}
      <div class="row">
        <h2>Titles</h2>
        Can be an entity id or a positive numeric value.
      </div>
      ${this.inputRow("grid_title", "Grid")}
      ${this.inputRow("load_title", "Load")}
      ${this.inputRow("generation_title", "Generation")}
      ${this.inputRow("storage_title", "Storage")}
      ${this.inputRow("load_top_title", "Load Top")}
      ${this.inputRow("load_bottom_title", "Load Bottom")}
      <div class="row">
        <h2>Extra Info</h2>
        Appears above the Icon in the Circle. Can be an entity id or a string.
      </div>
      ${this.inputRow("grid_info_id", "Grid")}
      ${this.inputRow("load_info_id", "Load")}
      ${this.inputRow("generation_info_id", "Generation")}
      ${this.inputRow("storage_info_id", "Storage")}
      ${this.inputRow("load_top_info_id", "Load Top")}
      ${this.inputRow("load_bottom_info_id", "Load Bottom")}

      <div class="row"><h2>Icons</h2></div>
      ${this.iconPickerRow("grid_icon")}
      ${this.iconPickerRow("generation_icon")}
      ${this.iconPickerRow("storage_icon")} ${this.iconPickerRow("load_icon")}
      ${this.iconPickerRow("load_top_icon")}
      ${this.iconPickerRow("load_bottom_icon")}
    </form>`;
  }

  _nameChanged(ev: Event) {
    const target = ev.target as HTMLInputElement;
    console.log(this.hass);
  }

  _change(ev: Event) {
    const target = ev.target as HTMLInputElement;
    ev.stopPropagation();
    // this._config is readonly, copy needed
    const newConfig = Object.assign({}, this._config);
    newConfig[target.id] = target.value;
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
