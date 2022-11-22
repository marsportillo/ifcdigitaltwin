import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./public/javascripts/app.js",
  output: [

    {
      format: "esm",
      file: "./public/javascripts/bundle.js",
    },
  ],
  plugins: [resolve()],
};