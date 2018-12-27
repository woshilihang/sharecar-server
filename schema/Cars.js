// const mongoose = require('mongoose')
const mongoose = require('../db')
const Schema = mongoose.Schema
const CarSchema = new Schema({
  // 根据hasCar判断是有车拼单还是无车拼单
  /*
    有车拼单必填项
    
  */
  outset: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  destination: {
    type: String,
    unique: false,
    required: true
  },
  way: String,
  cTime: {
    type: Date,
    required: true
  },
  emptySeat: { // 空余座位数， 此项为有车拼单选填项
    type: Number,
    default: 0
  },
  peopleNum:{ // 同行人数   此项为无车拼单选填项
    type: Number,
    default: 0
  }, 
  remarks: String,
  // 此处记录填写拼车的用户信息
  username: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    require: true
  },
  tel: {
    type: Number,
    required: true
  },
  wxNumber: {
    type: String,
    required: false
  },
  hasCar: { // 用于判断一个用户对应的是已有车寻找伙伴还是没有车寻求车辆
    type: Boolean,
    required: true,
    default: true
  }
})

// 创建一个车找人成功
module.exports = mongoose.model('Cars', CarSchema);
