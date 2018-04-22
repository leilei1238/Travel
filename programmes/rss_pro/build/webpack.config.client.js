const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const baseConfig=require('./webpack.base');
const webpackMerge=require('webpack-merge');

const isDev=process.env.NODE_ENV==='development';

const config=webpackMerge(baseConfig,{
    entry:{
        app:path.join(__dirname,'../client/app.js')
    },
    output:{
        filename:'[name].[hash:5].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../client/template.html')
        }),
        new HtmlWebpackPlugin({
            template:'!!ejs-compiled-loader!'+path.join(__dirname,'../client/server.template.ejs'),
            filename:'server.ejs'
        })
    ]
});

if(isDev){
    config.entry={
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'../client/app.js')
        ]
    };
    config.devtool="source-map";
    config.devServer={
        host:'0.0.0.0',
        contentBase:path.join(__dirname,'../dist'),
        hot:true,
        port:8888,
        overlay:{
            errors:true
        },
        historyApiFallback:{//指定index是public下的html
            index:'/public/index.html'
        },
        publicPath:'/public/',
        proxy:{
            "/api/**":"http://localhost:3333/"
        }
    };
    config.plugins.push(new webpack.HotModuleReplacementPlugin)
}
module.exports=config;