module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/transform-runtime",
    "inline-react-svg",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          Components: "./src/Components",
          Styles: "./src/assets/styles",
          Images: "./src/assets/images",
          Constants: "./src/constants",
          Utils: "./src/utils",
        },
      },
    ],
  ],
};
