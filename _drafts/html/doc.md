#### 如何理解HTML语义化

语义化的使用正确的标签，好处：
- 机器友好，包含SEO爬虫程序，以及电视/阅读器等屏幕的体验（比如img和div的background图片，比如a标签和监听跳转）
- 开发者友好，增加可读性和利于维护

#### meta viewport的作用

#### doctype文档类型的作用是什么

声明在HTML文档的第一行，告知浏览器采取的文档解析标准。有三种模式：标准模式/怪异模式和近乎标准模式

#### html/xhtml/xml的区别

- html超文本标记语言
- xml可扩展标记语言，是用于数据存储和传输的格式，没有JSON格式轻量
- xhtml可扩展超文本标记语言，基于HTML和XML两者，W3C为了解决HTML混乱和产生，并基于此诞生了HTML5

#### html元素中的data-属性的作用

HTML元素的数据属性，标记在元素上的额外信息，通过JS来访问和操作。但前端框架出现后，这种方法已经不流行。

#### HTML4和HTML5的区别

- 文档类型声明的变化，HTML5只有一个标准`<!DOCTYPE HTML>`
- 新增一系列新的HTML元素和属性
  - 元素：媒体相关canvas/video/audio、布局相关header/footer等
  - 属性：id/placeholder/requrie/min-max等

#### meta常用的标签有哪些

meta标签包含name和content两个属性，常见的定义如下

```
<!-- 配置文档的编码 -->
<meta charset="UTF-8">


```