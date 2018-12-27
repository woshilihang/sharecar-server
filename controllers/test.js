const tetsMdel = require('../modules/test')

class Test {
  static async create(ctx) {
    ctx.response.body = 'hello koa2'
  }
}

module.exports = Test
