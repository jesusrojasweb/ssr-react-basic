const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    mode: "development",

    name: "server",
    target: "node",
    externals: [nodeExternals()],

    entry: {
      server: ["@babel/polyfill", path.resolve(__dirname, "src", "server.js")]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "server.js"
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [path.resolve(__dirname, "src")],
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
                {
                  plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "babel-plugin-styled-components"
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  },
  {
    mode: "development",

    name: "client",
    target: "web",

    entry: {
      client: [
        // '@babel/polyfill',
        "./src/client.js"
      ]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js"
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "src")],
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
                {
                  plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "babel-plugin-styled-components"
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  }
];
