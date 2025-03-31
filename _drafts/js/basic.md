#### let、const、var 的区别有哪些？

- let声明的变量不能在声明变量之前调用，而var声明的变量会经历变量提升，在声明之前使用
- var变量会挂载在window上，let和const声明的变量只在块作用域下
- const是常量声明，一旦声明不可修改，但如果是复杂数据类型，比如对象可以修改属性值

# js数据类型有哪些
# 如何进行数据类型检测

#### 强制类型转换的方法，以及什么情况下回进行隐式转换

Object提供了一系列强制类型转换的静态方法：parseInt()/parseFloat()，以及各个类型的构造函数Number()
隐式转换的场景：
- 算术运算：

```
// 对象参与算术运算
const obj = { valueOf: () => 42, toString: () => "Hello" };
console.log(obj + 1); // 43（valueOf 优先）
```

- 逻辑运算和条件判断
```
console.log(!0);     // true（0 → false）

if ("") { /* 不执行 */ }  // 空字符串 → false
if ({}) { /* 执行 */ }    // 对象 → true
```

- 比较运算
```
console.log("5" == 5); // true（"5" → 5）
console.log(0 == false); // true（false → 0）
console.log([] == 0); // true（[] → "" → 0）
```
- 输出打印`console.log()  alert()`

# Number.isFinite & isFinite区别
# isNaN 和 Number.isNaN 函数的区别？
# arguments对象
# for of 和 for in区别
#### Java与JavaScript的区别
#### JS中Undefined、Null、NaN、空字符串和empty object的区别

#### 如何理解JS的模块化

- 浏览器端的模块化AMD(Require.js)/CMD(Sea.js)
- 服务端的模块化CommonJS规范：使用require关键字引入，使用exports或者modolue.exports导出
- ES6的模块化（服务端和浏览器端通用规范）：导入用import关键字，导出用export关键字