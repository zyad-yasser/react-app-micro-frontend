const path = require('path');
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, '../build'),
  publicPath: 'auto',
};

config.plugins.push(
  new ModuleFederationPlugin({
    name: 'app_builder',
    library: { type: 'var', name: 'app_builder' },
    filename: 'appBuilder.js',
    exposes: {
      './app': './src/App',
    },
    shared: {
      "react-dom": "react-dom",
      react: {
        import: "react",
        shareKey: "react",
        shareScope: "default",
        singleton: true,
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  })
);

config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

config.optimization.runtimeChunk = false;
