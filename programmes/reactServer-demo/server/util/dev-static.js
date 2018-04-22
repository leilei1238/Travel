const axios = require('axios');
const path = require('path');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const proxy = require('http-proxy-middleware'); //代理中间件;
const ReactDomServer = require('react-dom/server');
const serverConfig = require('../../build/webpack.config.server');
const getTemplate = () => {//1:读取template
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8888/public/index.html')
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    });
};
//2:拿到server-entry.bundle.js
let serverBundle;
const mfs = new MemoryFs;
const serverCompiler = webpack(serverConfig); //启动服务端 webpack的配置；
serverCompiler.outputFileSystem = mfs;//指定webpack编译内容读写，用内存读写；

serverCompiler.watch({}, (err, stats) => {//监听webpack打包的内容
    if (err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(item => {
        console.log(item)
    }); //输出错误信息
    stats.warnings.forEach(item => {
        console.log(item)
    });//输出warning信息；
    const bundlePath = path.resolve(serverConfig.output.path, serverConfig.output.filename);//拿到bundle的路径；

    //不要输出到硬盘，性能差，建议输出到内存;
    const bundle = mfs.readFileSync(bundlePath, 'utf-8');
    module._compile(bundle, 'server-entry.js');
    serverBundle = module.exports.default; //用模块实例，编译读取的内容为模块；
});
module.exports = function (app) {
    //编译环境中没有静态文件夹生成，解决错误：http-proxy-midddleware 用它来做代理
    app.use('/public', proxy({//访问静态文件的处理；
        target: 'http://localhost:8888'
    }));

    //1:找template
    app.get('*', (req, res, next) => {//1)404文件，2)默认/，服务器返回的内容
        let content=ReactDomServer.renderToString(serverBundle);
        getTemplate().then(template => {
            res.send(template.replace('<!--app-->', content))
        })
    })
};