const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const reactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const app = express();
app.use(session({
    maxAge: 10 * 60 * 1000,
    name: 'cookieID',
    resave: false,
    saveUninitialized: false,
    secret:"love lei",
}));
app.use(bodyParser.urlencoded({extended: false}));// format-data
app.use(bodyParser.json());

//前端请求的接口
app.post('/api/user/login',require('./util/handle-login'));
app.use('/api',require('./util/proxy'));

//reactSSR服务端渲染；
if (!isDev) {
    const serverEntry = require('../dist/server-entry').default;
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
    app.use('/public', express.static(path.join(__dirname, '../dist')));//指定静态资源文件目录；
    app.get('*', (req, res, next) => {//访问任何请求，都由服务器返回页面，也可以 解决404
        const appString = reactSSR.renderToString(serverEntry); //reactSSR.renderToString()把JSX元素渲染到初始HTML中
        res.send(template.replace('<!--app-->', appString));
    });
} else {
    const devStatic = require('./util/dev-static');
    devStatic(app)
}

app.listen(3333, () => {
    console.log('server is listening on 3333')
});
