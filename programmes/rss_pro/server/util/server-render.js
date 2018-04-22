const reactRSS = require('react-dom/server');
const bootstrap = require('react-async-bootstrapper');
const proxy = require('http-proxy-middleware');//http中间件，用来做代理；
const ejs=require('ejs');
const serialize=require('serialize-javascript');
const Helmet=require('react-helmet').default;


const getStoreState=(stores)=>{
    return Object.keys(stores).reduce((result,storeName)=>{
        result[storeName]=stores[storeName].toJson();
        return result;
    },{})
};

module.exports = (bundle,template,req,res) => {
    return new Promise((resolve, reject) => {
        const serverBundle=bundle.default;
        const createStoreMap=bundle.createStoreMap;
        const routerContext = {};
        const stores = createStoreMap();
        const app = serverBundle(stores, routerContext, req.url);
        bootstrap(app).then(() => {
            if (routerContext.url) {//路由跳转：这个url是react自己给添加的；
                res.status(302).setHeader("Location", routerContext.url);
                res.end();
                return;
            }
            const state = getStoreState(stores);
            const content = reactRSS.renderToString(app);
            const helment=Helmet.rewind();
            const html = ejs.render(template, {
                appString: content,
                initialState: serialize(state),
                meta:helment.meta.toString(),
                title:helment.title.toString(),
                style:helment.style.toString(),
                link:helment.link.toString()
            });
            res.send(html);
            resolve();
        }).catch(reject)
    })
};