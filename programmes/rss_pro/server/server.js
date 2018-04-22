const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const isDev = process.env.NODE_ENV === 'development';
const serverRender=require('./util/server-render');

const app = express();
app.use(session({
    secret: 'keyboard cat',
    maxAge: 10 * 60 * 1000,
    name: 'cookieId',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: false})); //parse application/x-www-form-urlencoded
app.use(bodyParser.json());//parse application/json
app.use(favicon(path.join(__dirname, '../favicon.ico')));

app.use('/api/user',require('./util/handle-login'));
app.use('/api',require('./util/proxy'));



if (!isDev) {
    const serverEntry = require('../dist/server-entry');
    const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');

    app.use("/public", express.static(path.join(__dirname, '../dist')));//静态资源
    app.get('*', (req, res, next) => {
        // const content = ReactSSR.renderToString(serverEntry);
        // res.send(template.replace('<!--app-->', content))
        serverRender(serverEntry,template,req,res).catch(next);
    });
} else {//去webpack的配置中拿东西；再渲染页面给前端
    const devStatic = require('./util/dev-static')(app);
}
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send(error)
});
app.listen(3333, () => {
    console.log('server is listening on 3333')
});