var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),

    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api',
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',
      models: 'app/models/models.js',
      aws: 'app/aws/aws.js',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /.(png|jpg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpg|png)$/, loader: 'file?name=./public/images/[name].[ext]', include:  path.resolve(__dirname, './public/images/')},
      { test: /\.json$/, loader: "json-loader" },
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ]
  },

  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map'
};
