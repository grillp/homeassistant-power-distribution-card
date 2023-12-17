import { PowerDistribution } from "./card";
import { PowerDistributionEditor } from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("power-distribution", PowerDistribution);
customElements.define("power-distribution-editor", PowerDistributionEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "power-distribution",
  name: "Power Distribution Card",
  description:
    "Like the HA Power Distribution Card, but show power and flow rather than energy",
});
