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

                <div class="row"><label class="label cell" for="grid_to_house_id">grid_to_house_id:</label><input @change="${this.handleChangedEvent}" id="grid_to_house_id" value="${this._config.grid_to_house_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_grid_id">generation_to_grid_id:</label><input @change="${this.handleChangedEvent}" id="generation_to_grid_id" value="${this._config.generation_to_grid_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_battery_id">generation_to_battery_id:</label><input @change="${this.handleChangedEvent}" id="generation_to_battery_id" value="${this._config.generation_to_battery_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_to_house_id">generation_to_house_id:</label><input @change="${this.handleChangedEvent}" id="generation_to_house_id" value="${this._config.generation_to_house_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_to_house_id">battery_to_house_id:</label><input @change="${this.handleChangedEvent}" id="battery_to_house_id" value="${this._config.battery_to_house_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_to_grid_id">battery_to_grid_id:</label><input @change="${this.handleChangedEvent}" id="battery_to_grid_id" value="${this._config.battery_to_grid_id}"></input></div>
                <div class="row"><label class="label cell" for="appliance1_power_id">appliance1_power_id:</label><input @change="${this.handleChangedEvent}" id="appliance1_power_id" value="${this._config.appliance1_power_id}"></input></div>
                <div class="row"><label class="label cell" for="appliance2_power_id">appliance2_power_id:</label><input @change="${this.handleChangedEvent}" id="appliance2_power_id" value="${this._config.appliance2_power_id}"></input></div>
                <div class="row"><label class="label cell" for="grid_info_id">grid_info_id:</label><input @change="${this.handleChangedEvent}" id="grid_info_id" value="${this._config.grid_info_id}"></input></div>
                <div class="row"><label class="label cell" for="battery_info_id">battery_info_id:</label><input @change="${this.handleChangedEvent}" id="battery_info_id" value="${this._config.battery_info_id}"></input></div>
                <div class="row"><label class="label cell" for="house_info_id">house_info_id:</label><input @change="${this.handleChangedEvent}" id="house_info_id" value="${this._config.house_info_id}"></input></div>
                <div class="row"><label class="label cell" for="generation_info_id">generation_info_id:</label><input @change="${this.handleChangedEvent}" id="generation_info_id" value="${this._config.generation_info_id}"></input></div>
                <div class="row"><label class="label cell" for="appliance1_info_id">appliance1_info_id:</label><input @change="${this.handleChangedEvent}" id="appliance1_info_id" value="${this._config.appliance1_info_id}"></input></div>
                <div class="row"><label class="label cell" for="appliance2_info_id">appliance2_info_id:</label><input @change="${this.handleChangedEvent}" id="appliance2_info_id" value="${this._config.appliance2_info_id}"></input></div>
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
