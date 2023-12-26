import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;
const output_file = "homeassistant-power-distribution-card.js";

const serveOptions = {
  contentBase: ["./dist"],
  host: "0.0.0.0",
  port: 4000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/" + output_file,
      format: "iife",
      name: "version",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    nodeResolve(),
    filesize(),
    typescript(),
    ...(production ? [terser()] : [serve(serveOptions)]),
  ],
};
