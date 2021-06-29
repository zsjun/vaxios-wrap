import babel from "@rollup/plugin-babel";
export default {
  input: "src/main.js",
  output: [
    {
      file: "lib/index.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "lib/index.ems.js",
      format: "esm",
      exports: "auto",
    },
  ],
  plugins: [babel({ babelHelpers: "bundled" })],
};
