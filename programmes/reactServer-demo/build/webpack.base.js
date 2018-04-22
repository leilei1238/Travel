const path=require('path');
module.exports = {
    output: {//指定输出的目录
        path: path.join(__dirname, '../dist/'),
        publicPath: "/public/", //加载静态资源文件 引用时 的路径；作用：1）前缀区分 URL是静态资源 还是 API请求 2）cdn前缀
    },
    resolve: {
        "extensions": ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader', //babel-loader:完成 es6/7/8 jsx编译
                exclude: [path.resolve(__dirname, '../node_modules')]
            }
        ]
    }
}