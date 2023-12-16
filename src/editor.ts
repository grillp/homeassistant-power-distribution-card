import { css, html, LitElement } from "lit";
import { state } from "lit/decorators/state";

export class TestlaPowerDistributionEditor extends LitElement {
  @state() _config;

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

  render() {
    return html`
            <form class="table">
                <div class="row"><h2>Power Entites</h2>Can be an entity id or a positive numeric value. All expected to in kW.</div>
                <div class="row"><label class="label cell" for="grid_to_load_id">Grid → House</label><input @change="${this.handleChangedEvent}" id="grid_to_load_id" value="${this._config.grid_to_load_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_grid_id">Generation → Grid</label><input @change="${this.handleChangedEvent}" id="generation_to_grid_id" value="${this._config.generation_to_grid_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_battery_id">Generation → Battery</label><input @change="${this.handleChangedEvent}" id="generation_to_battery_id" value="${this._config.generation_to_battery_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_load_id">Generation → House</label><input @change="${this.handleChangedEvent}" id="generation_to_load_id" value="${this._config.generation_to_load_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_to_load_id">Battery → Battery</label><input @change="${this.handleChangedEvent}" id="battery_to_load_id" value="${this._config.battery_to_load_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_to_grid_id">Battery → Grid</label><input @change="${this.handleChangedEvent}" id="battery_to_grid_id" value="${this._config.battery_to_grid_id}"></input></div>
                <div class="row"><label class="label cell" for="equipment1_power_id">Home → Appliance 1</label><input @change="${this.handleChangedEvent}" id="equipment1_power_id" value="${this._config.equipment1_power_id}"></input></div>
                <div class="row"><label class="label cell" for="equipment2_power_id">Home → Appliance 2</label><input @change="${this.handleChangedEvent}" id="equipment2_power_id" value="${this._config.equipment2_power_id}"></input></div>
                <div class="row"><h2>Extra Info</h2>Appears above the Icon in the Circle. Can be an entity id or a string. </div>
                <div class="row"><label class="label cell" for="grid_info_id">Grid:</label><input @change="${this.handleChangedEvent}" id="grid_info_id" value="${this._config.grid_info_id}"></input></div>
                <div class="row"><label class="label cell" for="load_info_id">House:</label><input @change="${this.handleChangedEvent}" id="load_info_id" value="${this._config.load_info_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_info_id">Generation:</label><input @change="${this.handleChangedEvent}" id="generation_info_id" value="${this._config.generation_info_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_info_id">Battery:</label><input @change="${this.handleChangedEvent}" id="battery_info_id" value="${this._config.battery_info_id}"></input></div>
                <div class="row"><label class="label cell" for="equipment1_info_id">Appliance 1:</label><input @change="${this.handleChangedEvent}" id="equipment1_info_id" value="${this._config.equipment1_info_id}"></input></div>
                <div class="row"><label class="label cell" for="equipment2_info_id">Appliance 2:</label><input @change="${this.handleChangedEvent}" id="equipment2_info_id" value="${this._config.equipment2_info_id}"></input></div>
                <div class="row"><h2>Titles</h2>Titles of the  elements. Can be an entity id or a positive numeric value. </div>
                <div class="row"><label class="label cell" for="grid_title">Grid:</label><input @change="${this.handleChangedEvent}" id="grid_title" value="${this._config.grid_title}"></input></div>
                <div class="row"><label class="label cell" for="load_title">Home:</label><input @change="${this.handleChangedEvent}" id="load_title" value="${this._config.load_title}"></input></div>
                <div class="row"><label class="label cell" for="battery_title">Battery:</label><input @change="${this.handleChangedEvent}" id="battery_title" value="${this._config.battery_title}"></input></div>
                <div class="row"><label class="label cell" for="generation_title">Generation:</label><input @change="${this.handleChangedEvent}" id="generation_title" value="${this._config.generation_title}"></input></div>
                <div class="row"><label class="label cell" for="equipment1_title">Appliance 1:</label><input @change="${this.handleChangedEvent}" id="equipment1_title" value="${this._config.equipment1_title}"></input></div>
                <div class="row"><label class="label cell" for="equipment2_title">Appliance 2:</label><input @change="${this.handleChangedEvent}" id="equipment2_title" value="${this._config.equipment2_title}"></input></div>
                <div class="row"><h2>Icons</h2></div>
                <div class="row"><label class="label cell" for="generation_icon">generation_icon:</label><input @change="${this.handleChangedEvent}" id="generation_icon" value="${this._config.generation_icon}"></input></div>
                </form>
        `;
  }

  handleChangedEvent(changedEvent: Event) {
    const target = changedEvent.target as HTMLInputElement;
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
