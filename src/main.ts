import { PowerDistribution } from "./card";
import { PowerDistributionEditor } from "./editor";
import { CUSTOM_CARD_ID } from "./common";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define(CUSTOM_CARD_ID, PowerDistribution);
customElements.define(CUSTOM_CARD_ID + "-editor", PowerDistributionEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "power-distribution",
  name: "Power Distribution Card",
  description:
    "Like the HA Power Distribution Card, but show power and flow rather than energy",
});
