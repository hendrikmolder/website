const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['*', '.js', '.jsx', 'ts', '.json', '.png'],
        modules: [path.resolve(__dirname, 'app'), 'node_modules'],
        alias: {
            styles: 'src/styles'
        }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.

            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
              test: /\.(svg|png|jpe?g|ttf|woff2?|eot)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 15000,
                  name: './assets/[hash].[ext]'
                }
              }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
              enforce: 'pre',
              test: /\.js$/,
              use: 'source-map-loader',
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract({
                fallback: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                use: [
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            sourceMaps: false,
                            localIdentName:'[name]__[local]__[hash:base64:5]'
                        }
                    },
                    'sass-loader', 'postcss-loader'
                ],
              })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true, disable: false }),
        new HtmlWebpackPlugin({ template: './index.html'}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ],
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
        ],
    devServer: {
        historyApiFallback: true,
        public: 'dev.molder.eu'
    }

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
};