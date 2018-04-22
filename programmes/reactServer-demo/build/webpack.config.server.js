//把server-entry文件，打包成node环境下，运行commonjs2模块的文件；因为1)服务器没有html文件 2)无缓存，所以，不要html-webpack-plugin,hash
const path=require('path');
const webpackMerge=require('webpack-merge');
const baseConfig=require('./webpack.base');

module.exports=webpackMerge(baseConfig,{
    target: "node",
    entry:{
        app:path.join(__dirname,'../client/server-entry.js') //指定资源文件的路径
    },
    output:{//指定输出的目录
        filename:'server-entry.js',//有文件改动，就修改浏览器缓存；
        libraryTarget: "umd" //打包出来的文件，使用的模块化方案;amd cmd umd commonjs2
    }
});