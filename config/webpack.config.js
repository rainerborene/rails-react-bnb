const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const config = {
  entry: {
    app: ['./app/assets/javascripts/index'],
    vendor: [
      'babel-polyfill',
      'es5-shim/es5-sham',
      'es5-shim/es5-shim',
      'react',
      'react-bootstrap',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-bootstrap',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ]
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve('../app/assets/webpack'),
    publicPath: `http://localhost:8080/javascripts`
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
    }),
  ],

  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console

  config.entry.app.push(
    `webpack-dev-server/client?http://localhost:8080`,
    'webpack/hot/only-dev-server'
  );

  config.plugins.push(
    new webpack.NoErrorsPlugin()
  );

  config.devtool = 'eval-source-map';
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin()
  );
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}

module.exports = config;
