import { css } from "lit";

export const styles = css`
  :host {
    --mdc-icon-size: 24px;
  }
  ha-card {
    min-width: 210px;
  }
  .card-content {
    position: relative;
    direction: ltr;
  }
  .lines {
    position: absolute;
    bottom: -10px;
    left: 0px;
    width: 100%;
    height: 158px;
    display: flex;
    justify-content: center;
    padding: 0px 16px 16px;
    box-sizing: border-box;
  }

  .lines.high {
    bottom: 100px;
  }

  .lines svg {
    width: calc(100% - 160px);
    height: 100%;
    max-width: 340px;
  }

  .lines.right {
    right: 0px;
    width: 110px;
    left: calc(100% - 110px);
    bottom: -8px;
    height: 155px;
  }

  .lines.right.high {
    bottom: 100px;
    height: 156px;
  }

  .lines.right svg {
    width: 100%;
  }

  .right circle.grid {
    stroke-width: 4;
    strok-fill: ;
  }

  .lines svg {
    width: calc(100% - 160px);
    height: 100%;
    max-width: 340px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }
  .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle-container.low-carbon {
    margin-right: 4px;
  }
  .circle-container.solar {
    margin: 0 4px;
    height: 130px;
  }
  .circle-container.equipment1 {
    margin-left: 4px;
    height: 130px;
  }
  .circle-container.water.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.battery {
    height: 110px;
    justify-content: flex-end;
  }
  .circle-container.equipment2 {
    margin-left: 4px;
    height: 110px;
    justify-content: flex-end;
  }
  .spacer {
    width: 84px;
  }
  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    position: relative;
    text-decoration: none;
    color: var(--primary-text-color);
  }
  ha-svg-icon {
    padding-bottom: 2px;
  }
  ha-svg-icon.small {
    --mdc-icon-size: 12px;
  }
  .label {
    color: var(--secondary-text-color);
    font-size: 12px;
    opacity: 1;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px;
    white-space: nowrap;
  }
  line,
  path {
    stroke: var(--primary-text-color);
    stroke-width: 1;
    fill: none;
  }
  .circle svg {
    position: absolute;
    fill: none;
    stroke-width: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .gas path,
  .gas circle {
    stroke: var(--energy-gas-color);
  }
  circle.gas {
    stroke-width: 4;
    fill: var(--energy-gas-color);
  }
  .gas .circle {
    border-color: var(--energy-gas-color);
  }
  .water path,
  .water circle {
    stroke: var(--energy-water-color);
  }
  circle.water {
    stroke-width: 4;
    fill: var(--energy-water-color);
  }
  .water .circle {
    border-color: var(--energy-water-color);
  }
  .low-carbon line {
    stroke: var(--energy-non-fossil-color);
  }
  .low-carbon .circle {
    border-color: var(--energy-non-fossil-color);
  }
  .low-carbon ha-svg-icon {
    color: var(--energy-non-fossil-color);
  }
  circle.low-carbon {
    stroke: var(--energy-non-fossil-color);
    fill: var(--energy-non-fossil-color);
  }
  .solar .circle {
    border-color: var(--energy-solar-color);
  }
  circle.solar,
  path.solar {
    stroke: var(--energy-solar-color);
  }
  circle.solar {
    stroke-width: 4;
    fill: var(--energy-solar-color);
  }
  .battery .circle {
    border-color: var(--energy-battery-in-color);
  }
  circle.battery,
  path.battery {
    stroke: var(--energy-battery-out-color);
  }
  path.battery-house,
  circle.battery-house {
    stroke: var(--energy-battery-out-color);
  }
  circle.battery-house {
    stroke-width: 4;
    fill: var(--energy-battery-out-color);
  }
  path.battery-solar,
  circle.battery-solar {
    stroke: var(--energy-battery-in-color);
  }
  circle.battery-solar {
    stroke-width: 4;
    fill: var(--energy-battery-in-color);
  }
  .battery-in {
    color: var(--energy-battery-in-color);
  }
  .battery-out {
    color: var(--energy-battery-out-color);
  }
  path.battery-from-grid {
    stroke: var(--energy-grid-consumption-color);
  }
  path.battery-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  path.return,
  circle.return,
  circle.battery-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  circle.return,
  circle.battery-to-grid {
    stroke-width: 4;
    fill: var(--energy-grid-return-color);
  }
  .return {
    color: var(--energy-grid-return-color);
  }
  .grid .circle {
    border-color: var(--energy-grid-consumption-color);
  }
  .consumption {
    color: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid,
  path.grid {
    stroke: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid {
    stroke-width: 4;
    fill: var(--energy-grid-consumption-color);
  }
  .load .circle {
    border-width: 0;
    border-color: var(--primary-color);
  }
  .load .circle.border {
    border-width: 2px;
  }
  .circle svg circle {
    animation: rotate-in 0.6s ease-in;
    transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;
    fill: none;
  }
  @keyframes rotate-in {
    from {
      stroke-dashoffset: 238.76104;
      stroke-dasharray: 238.76104;
    }
  }
  .card-actions a {
    text-decoration: none;
  }
`;
