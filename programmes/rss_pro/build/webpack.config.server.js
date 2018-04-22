const path=require('path');
const baseConfig=require('./webpack.base');
const webpackMerge=require('webpack-merge');
module.exports=webpackMerge(baseConfig,{
    target: "node", //使用的执行环境"web"浏览器,"node"
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'server-entry.js',
        libraryTarget: "commonjs2" //生成的模块的规范：amd umd commonjs
    }
});