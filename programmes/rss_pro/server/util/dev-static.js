const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const serverConfig = require('../../build/webpack.config.server');
const serverCompiler = webpack(serverConfig);
const MemoryFs = require('memory-fs');
const mfs = new MemoryFs;
const reactRSS = require('react-dom/server');
const bootstrap = require('react-async-bootstrapper');
const proxy = require('http-proxy-middleware');//http中间件，用来做代理；
const ejs = require('ejs');
const serialize = require('serialize-javascript');
const serverRender = require('./server-render');

const getTemplate = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8888/public/server.ejs')
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
};
serverCompiler.outputFileSystem = mfs;

let serverBundle, createStoreMap;
serverCompiler.watch({}, (err, stats) => {
    if (err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(err => console.error(err));
    stats.warnings.forEach(warn => console.error(warn));

    const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);
    const bundle = mfs.readFileSync(bundlePath, 'utf-8');
    module._compile(bundle, 'server-entry.js');
    serverBundle=module.exports;
});
module.exports = function (app) {
    //需获取template 和 编译出来的server-entry；在用后者reactSRR处理后替换前者
    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }));
    app.get('*', (req, res, next) => {
        getTemplate().then(template => {
            if(!serverBundle){
                return res.send('waiting for compile,refresh later')
            }
            return serverRender(serverBundle,template,req,res)
        }).catch(next)
    })
};