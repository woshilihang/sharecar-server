// 导入车模型层
const CarsModel = require('../modules/cars')
// 导入用户模型层
const UserModel = require('../modules/User')
/*
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
*/

class CarController {
  // 添加发布车单
  static async createHasCar(ctx) {
    // 接收客户端数据
    let req = ctx.request.body
    // 拿到是否为与车拼单信息
    // let hasCar = ctx.request.query.hasCar
    // 整理请求数据
    let postData = Object.assign({}, {
      "hasCar": true
    }, req)
    // console.log(postData)
    const data = await CarsModel.createCar(postData)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '创建有车拼单成功',
      data
    }
    // 整理发布拼单信息的用户数据
    let userData = {
      username: req.username,
      sex: req.sex,
      tel: req.tel,
      wx: req.wx
    }
    // 把发布拼单的用户加入用户表中
    const UserData = await UserModel.createUser(userData)
  };

  static async createNoCar(ctx) {
    // 接收客户端数据
    let req = ctx.request.body
    // 拿到是否为与车拼单信息
    // let hasCar = ctx.request.query.hasCar
    // 整理请求数据
    let postData = Object.assign({}, {
      "hasCar": false
    }, req)
    // console.log(postData)
    const data = await CarsModel.createCar(postData)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '创建无车拼单成功',
      data
    }
    // 整理发布拼单信息的用户数据
    let userData = {
      username: req.username,
      sex: req.sex,
      tel: req.tel,
      wx: req.wx
    }
    // 把发布拼单的用户加入用户表中
    const UserData = await UserModel.createUser(userData)
  };


  static async getCarDetail(ctx) { // xxx://api/carDetail?username=李航&&
    // 拿到客户端请求到的参数
    let req = ctx.request.query
    /*
      {
        username: '李航',
        _id: '0000000'
      }
    */
    //  console.log(req)
    const CarDetail = await CarsModel.getCarDetail(req)
    ctx.status = 200
    ctx.body = {
      CarDetail
    }
  };


  // ----------------------------------------------------根据有车无车拼单获取分类
  // 获取所有车单信息 --- 有车拼单 -- 无车拼单
  static async getAllCar(ctx) {
    const AllCar = await CarsModel.getAllCar()
    console.log('全部信息',AllCar)
    ctx.status = 200
    ctx.body = {
      data: AllCar,
      code: 0,
      msg: '获取所拼车单信息成功'
    }
  };

  // 有车拼单
  static async getHasCar(ctx) {
    // let req = ctx.request.query
    // console.log(req)

    let hasCar = "true"
    const HasCar = await CarsModel.getHasCar({"hasCar": hasCar})
    console.log(HasCar)
    ctx.status = 200
    ctx.body = {
      data: HasCar,
      code: 0,
      msg: '获取有车拼单信息成功'
    }
  };

  // 无车拼单
  static async getNoCar(ctx) {
    // let req = ctx.request.params
    let hasCar = false
    const NoCar = await CarsModel.getNoCar({"hasCar": hasCar})
    ctx.status = 200
    ctx.body = {
      data: NoCar,
      code: 0,
      msg: '获取无车拼单信息成功'
    }
  }
}


module.exports = CarController
