This project started using the https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter starter repo.

Here are the node scripts for running it locally:

**`watch`**
Starts `rollup` in watch mode to "transpile" any changes you make the any TypeScript Files. It also starts up a local server on port `4000` to serve the transpiled files to the test Home Assistant'.
Note that sometimes `rollup` watch can be a little fickle. I you make some major structural changes, or just some very incorrect TS syntax, it will stop running. You will then have to restart the `watch` script.

**`start:hass`**
Starts the test Home Assistant docker container instance. This should be used in conjunction with the `watch` script.

The test Home Assistant server is available at [`http://0.0.0.0:8123`](http://0.0.0.0:8123)

**`format`**
Formats your TS code with `Prettier`

## Packaging

There is one node script defined to generate a production version of the your custom card code

**`watch`**
It uses the `rollup_terser` library to compact you code even further!
