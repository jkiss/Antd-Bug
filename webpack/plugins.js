/**
 * Author: Mr.B
 * Date: 2017/7/7-18:14
 * Last Modified by: Nokey
 */
'use strict';

const config = require('../config')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

const PAGES = []

config.pages.forEach((e)=>{
    PAGES.push(
        new htmlWebpackPlugin({
            inject: false,
            filename: e.filename,
            template: path.resolve(__dirname, '../src/htmlTemplates/app.ejs'),
            _entry: e.entry.split("/").join("."),  // 用于多页判断
            page: e,
            public_path: config.public_path,
            ga_id: config.ga_id,
            fb_id: config.fb_id
        })
    )
})

module.exports = {
    plugins: [
        /**
         * CommonChunksPlugin will now extract all the common modules from vendor and node_modules
         */
        // ,new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: 'bundle/[name].js',
        //     minChunks: function (module) {
        //         var isNpmPlugin = module.context && module.context.indexOf('node_modules') !== -1;
        //         var isVendorPlugin = module.context && module.context.indexOf('vendor') !== -1;
        //         return isNpmPlugin || isVendorPlugin;
        //     }
        // })

        // ,new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        // })
        // new webpack.optimize.RuntimeChunkPlugin({
        //     name: "manifest"
        // }),

        // Extract css file for every entry files
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'bundle/[name].css'
            // chunkFilename: 'bundle/[name].css'
        })

        // Automatically loaded modules when identifier is used as free variable in a module
        ,new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            '_': 'lodash',
            'PropTypes': 'prop-types'
        })

        // Copy static files to 'config.output' folder
        ,new copyWebpackPlugin([
            {
                from: 'favicon.png',
                to: ''
            },{
                from: '**/*.*',
                to: 'vendor',
                context: 'src/vendor/copy/'
            },{
                from: '**/*.*',
                to: 'media',
                context: 'src/modules/res/copy/'
            }
        ])
    ].concat(PAGES)
}