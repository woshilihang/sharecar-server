// 导入cars表
const Cars = require('../schema/Cars')
// const ObjectID = require('mongodb').ObjectID
const Mongoose = require('mongoose')
class CarsModel {
  // 创建拼车单信息
  static async createCar(data) {
    let newCar = new Cars(data)
    console.log('成功')
    return await newCar.save((err, res) => {
      if (err) {
        console.log('error', err)
      } else {
        return {
          msg: '创建拼单成功',
          code: 1
        }
      }
    })
  }

  // 根据拼单id获取到拼单的详细信息
  // d为接收过来的参数
  static async getCarDetail(d) {
    // let id = d._id
    // let sid = Mongoose.Types.ObjectId(id
    let temp = {
      "username": d.username,
      "_id": d._id
    }
    return await Cars.find(temp, (err, res) => {
      if (err) {
        console.log('error:', err)
      } else {
        return { // 返回状态码以及查询到相应车子信息
          code: 200,
          data: res,
          message: '查询成功'
        }
      }
    })
  }


  // 获取所有拼车单信息
  static async getAllCar() {
    return await Cars.find((err, doc) => {
      if (err) {
        console.log('获取全部拼车信息错误', err)
      } else {
        // console.log('获取全部拼车信息成功', doc)
        return {
          doc
        }
      }
    })
  }


  //  获取有车拼单车单信息
  static async getHasCar(args) {
    // 拿到参数进行判断是否为有车拼单
    let hasCar = args.hasCar // 拿到是否为有车拼单
    // console.log(hasCar)
    if (hasCar) {
      // console.log('getHasCar')
      return await Cars.find({
        "outset": "南昌"
      }, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          // console.log(res)
          return res
        }
      })
    }
  }


  //  获取无车拼单车单信息
  static async getNoCar(args) {
    // 拿到参数进行判断是否为有车拼单
    let hasCar = args.hasCar // 拿到是否为有车拼单
    if (!hasCar) { // 如果是无车拼单
      return await Cars.find({
        "hasCar": hasCar
      }, (err, res) => {
        return new Promise((resolve, reject) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      })
    }
  }








}

module.exports = CarsModel
// 插入操作
function insert() {
  let cars = new Cars({
    outset: '南昌',
    destination: '广州',
    way: 'xxx高铁',
    cTime: '2018-12-17 12:00',
    emptySeat: 2,
    remarks: '小孩半价',

    username: '李航',
    sex: '男',
    tel: 18296542194,
    wx: '18296542194'
  })
  // save()方法讲数据存储在mongodb当中
  // update()
  // find()
  // 密码加密  md5.update(pwd)
  cars.save((err, res) => {
    if (err) {
      console.log('error', err)
    } else {
      console.log(res)
    }
  })
}
// insert();
