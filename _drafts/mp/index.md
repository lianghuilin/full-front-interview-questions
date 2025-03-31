#### 微信小程序原生与Vue的区别

数据响应的区别，vue直接赋值data数据，而小程序需要手动setData

#### 微信小程序的生命周期函数

- onLoad：页面加载完成，调一次
- onShow：页面显示，每次打开页面都调用
- onReady：初次渲染完成，调一次
- onHide：页面隐藏，当navigateTo或底部tab切换时调用
- onUnload：页面卸载，当redirectTo或navigateBack时调用

#### 微信小程序页面跳转的方式有哪些

- wx.navigateTo：保留当前页面，导航跳转到应用内的某个页面。但是不能跳到 tabbar 页面（参数必须为字符串）
- wx.redirectTo：关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
- wx.switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，路径后不能带参数
- wx.navigateBack：关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
- wx.reLaunch：关闭所有页面，打开到应用内的某个页面

#### 微信小程序的原理

小程序分为两个部分webview和appService，webview用来展现UI，appService用来处理业务逻辑、数据及接口调用。它们在两个进程中运行，通过系统层JSBridge实现通信，完成UI渲染、事件处理。