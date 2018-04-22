const Koa = require('koa')
const app = new Koa()

app.use(async (ctx,next)=>{
    ctx.body='hi luke'
})
app.listen(3333)