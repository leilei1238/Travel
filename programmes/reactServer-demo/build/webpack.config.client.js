const path = require('path');
const webpack=require('webpack');
const webpackMerge=require('webpack-merge');
const baseConfig=require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

//webpackMerge 两个对象的合并；后者覆盖前者，如果前者某个属性没有的话；
const config = webpackMerge(baseConfig,{
    entry: {
        app: path.join(__dirname, '../client/app.js') //指定资源文件的路径
    },
    output: {//指定输出的目录
        filename: '[name].[hash:5].js',//有文件改动，就修改浏览器缓存；
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
});
if(isDev){
    config.entry={
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    };
    config.devServer={//注意：webpack-dev-server 会先检查硬盘上有没有哪个文件， 然后才会去内存找；
        host:'0.0.0.0', //
        contentBase:path.join(__dirname,'../dist'), //在dist目录下，启动服务，所以直接访问http://localhost:8888/app.584bc.js
        port:8888,
        hot:true,
        overlay:{
            errors:true
        },
        historyApiFallback:{//1)指定index.html是哪里的html 2）所有404都返回index.html
            index:'/public/index.html',
            publicPath:'/public/'
        },
        proxy:{
            '/api':'http://localhost:3333'
        }
    };
    config.devtool='eval-source-map';
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config;