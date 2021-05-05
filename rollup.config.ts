import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { dirname } from "path";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    preserveModules: true,
    output: [
      {
        format: "cjs",
        dir: dirname(pkg.main),
      },
      {
        format: "esm",
        dir: dirname(pkg.module),
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      file: pkg.types,
    },
    plugins: [dts()],
  },
];
