const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

var browsers = [
  '>1%',
  'last 4 versions',
  'Firefox ESR',
  'IE 10',
  'not ie < 9' // React doesn't support IE8 anyway
];

var extractScss = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

module.exports = env => ({
  entry: [
    './src/polyfills.js',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [
                [
                  'env',
                  {
                    modules: false,
                    targets: {
                      browsers
                    }
                  }
                ],
                'react'
              ],
              plugins: ['transform-object-rest-spread']
            }
          }
          // 'eslint-loader'
        ]
      },
      {
        test: /\.(s*)css$/,
        exclude: [/styles\.scss$/, /node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers,
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(s*)css$/,
        include: [path.resolve(__dirname, '../src/styles')],
        exclude: /node_modules/,
        use: extractScss.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers,
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            'sass-loader',
          ],
          fallback: 'style-loader',
        })
      }
    ]
  },
  plugins: [
    extractScss,
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'},
      {from: '_MOCKDATA', to: '_MOCKDATA'},
      {from: 'src/favicon.ico', to: ''}
    ]),
    new webpack.NormalModuleReplacementPlugin(
      /environment\\environment.js$/,
      `./environment${env && env.TARGET ? `.${env.TARGET}` : ''}.js`
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: module =>
        module.context && module.context.indexOf('node_modules') !== -1
    })
  ],
  resolve: {
    alias: {
      AppActions: path.resolve(__dirname, '../src/actions/'),
      AppReducers: path.resolve(__dirname, '../src/reducers/'),
      AppComponents: path.resolve(__dirname, '../src/components/'),
      AppServices: path.resolve(__dirname, '../src/services/'),
      AppUtils: path.resolve(__dirname, '../src/utils/')
    },
    extensions: ['.js', '.json', '.scss'],
    modules: ['src', 'node_modules']
  }
});
