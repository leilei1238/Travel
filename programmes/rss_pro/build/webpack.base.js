const path=require('path');
module.exports = {
    resolve: {
        "extensions":[".jsx",".js"]
    },
    externals:Object.keys(require('../package').dependencies),
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: "/public/",//1)区分静态资源和路由 2）cdn前缀的路径
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [path.join(__dirname, '../node_modules')]
            }
        ]
    }
};