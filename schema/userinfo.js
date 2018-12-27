const mongoose = require('mongoose')

const Schema = mongoose.Schema
const UserSchema = new Schema({
  userId: { // 用户ID
    type: Schema.Types.ObjectId
  },
  username: { // 用户名
    type: String,
    required: true
  },
  sex: { // 性别
    type: String,
    require: true
  },
  tel: { // 电话号码
    type: Number,
    required: true
  },
  wxNumber: { // 微信号码
    type: String,
    required: false
  }
})

// 创建一个乘车表
module.exports = mongoose.model('User', UserSchema)
