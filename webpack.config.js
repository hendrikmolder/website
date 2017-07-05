const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ***REMOVED***
    entry: './app/index.jsx',
    output: ***REMOVED***
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/'
    ***REMOVED***,

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: ***REMOVED***
        extensions: ['*', '.js', '.jsx', 'ts', '.json', '.png'],
        modules: [path.resolve(__dirname, 'app'), 'node_modules'],
    ***REMOVED***,

    module: ***REMOVED***
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.

            ***REMOVED***
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            ***REMOVED***,
            ***REMOVED***
              test: /\.(svg|png|jpe?g|ttf|woff2?|eot)$/,
              use: ***REMOVED***
                loader: 'url-loader',
                options: ***REMOVED***
                  limit: 15000,
                  name: './assets/[hash].[ext]'
                ***REMOVED***
              ***REMOVED***
            ***REMOVED***,

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            ***REMOVED*** 
              enforce: 'pre', 
              test: /\.js$/, 
              use: 'source-map-loader',
            ***REMOVED***,
            ***REMOVED***
              test: /\.scss$/,
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract(***REMOVED***
                fallback: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                use: [
                  ***REMOVED*** loader: 'css-loader', query: ***REMOVED*** modules: true, sourceMaps: false, localIdentName:'[name]__[local]__[hash:base64:5]' ***REMOVED******REMOVED***,
                  'sass-loader', 'postcss-loader'
                ],
              ***REMOVED***)
            ***REMOVED***,
        ]
    ***REMOVED***,
    plugins: [
        new ExtractTextPlugin(***REMOVED*** filename: 'css/[name].css', allChunks: true, disable: false ***REMOVED***),
        new HtmlWebpackPlugin(***REMOVED*** template: './index.html'***REMOVED***),
        new webpack.LoaderOptionsPlugin(***REMOVED***
            options: ***REMOVED***
                postcss: [
                    autoprefixer()
                ],
            ***REMOVED***,
        ***REMOVED***),
        new webpack.DefinePlugin(***REMOVED***
            'process.env': ***REMOVED***
                NODE_ENV: JSON.stringify('production')
            ***REMOVED***
        ***REMOVED***),
        new webpack.optimize.UglifyJsPlugin()
        ],
    devServer: ***REMOVED***
        historyApiFallback: true,
        public: 'dev.molder.eu'
    ***REMOVED***

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
***REMOVED***;