<!-- mongoose 的一些 注意点-->

1. mongoose的内置修饰符
  trim uppercase lowercase
  定义表结构使用trim: true
2. mongoose的自定义修饰符
  getters 与 setters自定义修饰符
  通过set修饰符在增加数据时候对数据进行格式化 （建议使用）
  也可以通过get在实例获取数据时对数据进行格式化，获取model里面的数据进行格式化 （）
