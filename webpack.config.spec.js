var webpack = require('webpack');
var webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: webpackNodeExternals(),
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=stage-1&presets[]=react']
      },
      {
        test: /\.css$/,
        loader: 'css?modules&localIdentName=[name]-[local]___hash'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3001,
    hot: true
  }
};
