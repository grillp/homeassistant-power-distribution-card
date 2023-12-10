import { TestlaPowerDistribution } from "./card";
import { TestlaPowerDistributionEditor } from "./editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("tesla-power-distribution", TestlaPowerDistribution);
customElements.define(
  "tesla-power-distribution-editor",
  TestlaPowerDistributionEditor
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "tesla-power-distribution",
  name: "Tesla Power Distribution",
  description:
    "Similar to the HA Power Distribution Card, but show current power and flow rather than energy",
});
