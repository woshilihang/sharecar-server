const Router = require('koa-router')

// const Test = require('../controllers/test')
// 导入添加拼车到控制层
const Cars = require('../controllers/cars')

const router = new Router({
  prefix: '/api'
})

// router.get('/test', Test.create)

// 有车 --- 发起拼单
router.post('/createHasCar', Cars.createHasCar)

// 无车 --- 发起拼单
router.post('/createNoCar', Cars.createNoCar)


// 根据用户姓名与拼单id获取订单详情信息
router.get('/carDetail', Cars.getCarDetail)

// 获取全部拼单信息
router.get('/getAllCar', Cars.getAllCar)

// 获取有车拼单信息
router.get('/getHasCar', Cars.getHasCar)

// 获取无车拼单信息
router.get('/getNoCar', Cars.getNoCar)

module.exports = router
