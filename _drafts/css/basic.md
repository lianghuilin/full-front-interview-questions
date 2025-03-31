
### 解释px/em/rem/vh/vw/vmin/vmax

- px像素单位
- em相对父元素的font-size的倍数
- rem相对于根元素的font-size的倍数
- vw视窗宽的百分比
- vh视窗高的百分比
- vmin
- vmax

### CSS可继承的属性有哪些

- font-size字体尺寸
- text-indent：首行缩进
- text-align：文本对齐方式
- text-shadow：文本阴影
- line-height：行高
- visibility：可见性
- cursor：光标属性

### 隐藏页面元素的方式

- display:none
- width/heigh=0,overflow:hidden
- opacity=0
- visibility:hidden
- absolute移出视窗外
- clip-path

#### `display:none`和`visibility:hidden`的区别

- 前者是隐藏不占空间，而后者扔占空间，从渲染树上区分
- 从可继承性上区分