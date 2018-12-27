const Koa = require('koa')
const app = new Koa()
const KoaBodyParser = require('koa-bodyparser')
app.use(KoaBodyParser())

const Router = require('koa-router')
// const router =  new Router()
const router = require('./routes/test')

app.use(router.routes(), router.allowedMethods())

// router.get('/api', async ctx => {
//   ctx.response.body = 'hello world'
// })

app.listen(3001, () => {
  console.log('server at 3001  running....')
})
