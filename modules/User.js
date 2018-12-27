// 导入cars表
const User = require('../schema/userinfo')

class UserModel {
  // 创建拼车单信息
  static async createUser (data) {
    console.log(data)
    let newUser = new User(data)
    newUser.save((err, res) => {
      if (err) {
        console.log('error', err)
      } else {
        return {
          msg: '拼车用户表添加成功',
          code: 1
        }
      }
    })
  }
}

module.exports = UserModel
