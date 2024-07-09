const path = require ("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {    
    /* Defines the mode of building that we are on. */
    mode: "development",

    /* Defines the entry path to the builder, normally a index.js file. */
    entry: {
        /* This is the [name] used for the index.js file, normally the bundle file. */
        bundle: path.resolve(__dirname, "src/index.ts"),
    },
    
    /* Defines the distribution path to the builder, normally dist or public. */
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: 'auto',
        clean:true,
        assetModuleFilename: '[name][ext]',
    },
    
    devtool: 'source-map',
    
    devServer: {
        
        static: {
            directory: path.join(__dirname, 'dist/'),
        },
        server: 'https',
        port: 5500,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.gls$/i, use: "raw-loader",
            },

            /* Module Rules for SASS loader. */
            { 
                test:/\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader'], 
            },

            /* Module Rules for js loader. */
            {
                test:/\.js$/,  exclude: /node_modules/, use:{
                    loader: 'babel-loader', 
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
            },
            
            /* Module Rule for Typescript loader. */
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },

            /* Module Rule for image loader. */
            {
                test:/\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },
        ],
    },

    /* Resolve for TYPESCRIPT files */
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Portal BIM-RA',
            filename: 'index.html',
            template: 'src/template.html',
        }),

        new CopyPlugin ({
            patterns: [
                {
                    from: path.resolve("./src/assets"),
                    to: path.resolve("./dist/assets"),
                    force: true
                },
            ],
            options: {concurrency: 100}
        }),

        new Webpack.HotModuleReplacementPlugin(),
    ],
}