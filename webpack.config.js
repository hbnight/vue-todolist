var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry:{
        "index":__dirname + "/src/js/index.js"
    },
    output:{
        path:__dirname+'/dist/',
        filename:"js/[name].js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    compact:true
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.png$/,
                loader:"url-loader?limit=5&name=images/[name].[ext]"
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:__dirname + '/index.html',
            filename:__dirname + '/dist/index.html'
        })
    ]
}