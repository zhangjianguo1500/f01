const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const postcssCssnext = require('postcss-cssnext')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV || 'production'
const config = require('./config')

const paths = config.utils_paths
const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

const webpackConfig = {}

// console.log(config) ------------------------------------ Externals
// ------------------------------------
webpackConfig.externals = {}
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true
webpackConfig.externals['react/lib/ReactContext'] = true
webpackConfig.externals['react/addons'] = true

function plugins() {
  if (env === 'production') {
    return [
      new webpack.DefinePlugin(config.globals),
      new ExtractTextPlugin('style.css', {allChunks: true}),
      new webpack
        .optimize
        .DedupePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack
        .optimize
        .UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false
          }
        }),
      new webpack
        .optimize
        .CommonsChunkPlugin('vendor', 'vendor.js')
    ]
  }
  return [
    new webpack.DefinePlugin(config.globals),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new HtmlWebpackPlugin({title: 'Fooding Application', template: './index.html'})
  ]
}
const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

function loaders() {
  return [
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=8192'
    },
    // LESS
    {
      test: /\.less$/,
      loader: 'style!css!less'
    },

    // SASS
    {
      test: /\.scss$/,
      exclude: null,
      loaders: ['style', BASE_CSS_LOADER, 'postcss', 'sass?sourceMap']
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: [
          'react', 'es2015', 'stage-0'
        ],
        plugins: ['transform-runtime', 'transform-decorators-legacy']
      }
    }, {
      test: /\.css$/i,
      loader: ExtractTextPlugin.extract('style', `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`)
    },     /*{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.(woff|woff2)$/,
      loader: "url?prefix=font/&limit=5000"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    },

    {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      },*/
      { test: /\.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000' }
  ]
}

function entry() {
  if (env === 'production') {
    return {
      app: './index',
      vendor: [
        'react',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux'
      ]
    }
  }
  return {app: './index'}
}

function output() {
  if (env === 'production') {
    return {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
    }
  }
  return {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  }
}

var devtool = 'inline-source-map'
if (env === 'production') {
  devtool = 'hidden-sourcemap'
}

/* config */
module.exports = {
  devtool: devtool,
  entry: entry(),
  output: output(),
  module: {
    loaders: loaders()
  },
  postcss: [postcssCssnext({browsers: ['last 2 versions']})],
  devServer: {
    historyApiFallback: true
  },
  externals: webpackConfig.externals,
  plugins: plugins()
}
