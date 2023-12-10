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
                  <label class="label cell" for="grid_to_house_entity">grid_to_house_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="grid_to_house_entity" value="${this._config.grid_to_house_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_grid_entity">generation_to_grid_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_grid_entity" value="${this._config.generation_to_grid_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_battery_entity">generation_to_battery_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_battery_entity" value="${this._config.generation_to_battery_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_to_house_entity">generation_to_house_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_to_house_entity" value="${this._config.generation_to_house_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_to_house_entity">battery_to_house_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_to_house_entity" value="${this._config.battery_to_house_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_to_grid_entity">battery_to_grid_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_to_grid_entity" value="${this._config.battery_to_grid_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="battery_extra_entity">battery_extra_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="battery_extra_entity" value="${this._config.battery_extra_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="house_extra_entity">house_extra_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="house_extra_entity" value="${this._config.house_extra_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="grid_extra_entity">grid_extra_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="grid_extra_entity" value="${this._config.grid_extra_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="generation_icon">generation_icon:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="generation_icon" value="${this._config.generation_icon}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance1_state_entity">appliance1_state_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance1_state_entity" value="${this._config.appliance1_state_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance1_consumption_entity">appliance1_consumption_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance1_consumption_entity" value="${this._config.appliance1_consumption_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance2_state_entity">appliance2_state_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance2_state_entity" value="${this._config.appliance2_state_entity}"></input>
                </div>
                <div class="row">
                  <label class="label cell" for="appliance2_consumption_entity">appliance2_consumption_entity:</label>
                  <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="appliance2_consumption_entity" value="${this._config.appliance2_consumption_entity}"></input>
                </div>
                </form>
        `;
  }

  handleChangedEvent(changedEvent: Event) {
    const target = changedEvent.target as HTMLInputElement;
    // this._config is readonly, copy needed
    const newConfig = Object.assign({}, this._config);
    if (target.id == "grid_to_house_entity") {
      newConfig.grid_to_house_entity = target.value;
    } else if (target.id == "generation_to_grid_entity") {
      newConfig.generation_to_grid_entity = target.value;
    } else if (target.id == "generation_to_battery_entity") {
      newConfig.generation_to_battery_entity = target.value;
    } else if (target.id == "generation_to_house_entity") {
      newConfig.generation_to_house_entity = target.value;
    } else if (target.id == "battery_to_house_entity") {
      newConfig.battery_to_house_entity = target.value;
    } else if (target.id == "battery_to_grid_entity") {
      newConfig.battery_to_grid_entity = target.value;
    } else if (target.id == "battery_extra_entity") {
      newConfig.battery_extra_entity = target.value;
    } else if (target.id == "house_extra_entity") {
      newConfig.house_extra_entity = target.value;
    } else if (target.id == "grid_extra_entity") {
      newConfig.grid_extra_entity = target.value;
    } else if (target.id == "generation_icon") {
      newConfig.generation_icon = target.value;
    } else if (target.id == "appliance1_state_entity") {
      newConfig.appliance1_state_entity = target.value;
    } else if (target.id == "appliance1_consumption_entity") {
      newConfig.appliance1_consumption_entity = target.value;
    } else if (target.id == "appliance2_state_entity") {
      newConfig.appliance2_state_entity = target.value;
    } else if (target.id == "appliance2_consumption_entity") {
      newConfig.appliance2_consumption_entity = target.value;
    }
    const messageEvent = new CustomEvent("config-changed", {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(messageEvent);
  }
}
