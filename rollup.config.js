import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import clear from "rollup-plugin-clear";
import { isDev, getEntries as files } from "./.build-scripts/rollup.js";

const name = "party-starter";

const bundle = (config) => ({
  ...config,
  input: [...files("src", [".ts", ".tsx"])],
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      clear({
        targets: ["dist"],
        watch: true,
      }),
      esbuild(),
    ],
    output: [
      {
        dir: `dist`,
        format: "cjs",
        sourcemap: isDev(),
      },
      {
        dir: `dist`,
        format: "es",
        sourcemap: isDev(),
      },
    ],
  }),
  bundle({
    plugins: [
      clear({
        targets: ["dist/types"],
        watch: true,
      }),
      dts(),
    ],
    output: {
      dir: `dist/types`,
      format: "es",
    },
  }),
];
