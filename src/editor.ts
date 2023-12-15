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
                <div class="row">
                  <label class="label cell" for="grid_to_house_id">grid_to_house_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="grid_to_house_id" value="${this._config.grid_to_house_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_grid_id">generation_to_grid_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_grid_id" value="${this._config.generation_to_grid_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_battery_id">generation_to_battery_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_battery_id" value="${this._config.generation_to_battery_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_house_id">generation_to_house_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_house_id" value="${this._config.generation_to_house_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_to_house_id">battery_to_house_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_to_house_id" value="${this._config.battery_to_house_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_to_grid_id">battery_to_grid_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_to_grid_id" value="${this._config.battery_to_grid_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_extra_id">battery_extra_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_extra_id" value="${this._config.battery_extra_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="house_extra_id">house_extra_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="house_extra_id" value="${this._config.house_extra_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="grid_extra_id">grid_extra_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="grid_extra_id" value="${this._config.grid_extra_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_icon">generation_icon:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_icon" value="${this._config.generation_icon}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance1_state_id">appliance1_state_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance1_state_id" value="${this._config.appliance1_state_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance1_consumption_id">appliance1_consumption_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance1_consumption_id" value="${this._config.appliance1_consumption_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance2_state_id">appliance2_state_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance2_state_id" value="${this._config.appliance2_state_id}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance2_consumption_id">appliance2_consumption_id:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance2_consumption_id" value="${this._config.appliance2_consumption_id}"></input>
                </div>
                </form>
        `;
  }

  handleChangedEvent(changedEvent: Event) {
    const target = changedEvent.target as HTMLInputElement;
    // this._config is readonly, copy needed
    const newConfig = Object.assign({}, this._config);
    if (target.id == "grid_to_house_id") {
      newConfig.grid_to_house_id = target.value;
    } else if (target.id == "generation_to_grid_id") {
      newConfig.generation_to_grid_id = target.value;
    } else if (target.id == "generation_to_battery_id") {
      newConfig.generation_to_battery_id = target.value;
    } else if (target.id == "generation_to_house_id") {
      newConfig.generation_to_house_id = target.value;
    } else if (target.id == "battery_to_house_id") {
      newConfig.battery_to_house_id = target.value;
    } else if (target.id == "battery_to_grid_id") {
      newConfig.battery_to_grid_id = target.value;
    } else if (target.id == "battery_extra_id") {
      newConfig.battery_extra_id = target.value;
    } else if (target.id == "house_extra_id") {
      newConfig.house_extra_id = target.value;
    } else if (target.id == "grid_extra_id") {
      newConfig.grid_extra_id = target.value;
    } else if (target.id == "generation_icon") {
      newConfig.generation_icon = target.value;
    } else if (target.id == "appliance1_state_id") {
      newConfig.appliance1_state_id = target.value;
    } else if (target.id == "appliance1_consumption_id") {
      newConfig.appliance1_consumption_id = target.value;
    } else if (target.id == "appliance2_state_id") {
      newConfig.appliance2_state_id = target.value;
    } else if (target.id == "appliance2_consumption_id") {
      newConfig.appliance2_consumption_id = target.value;
    }
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
