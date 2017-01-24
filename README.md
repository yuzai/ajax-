# ajax-
自己封装了一个ajax函数，便于使用
[demo](http://blog.xiaoboma.com/ajax-/)
在测试的时候时候需要在本地运行example/js-server中的server,js.    node server.js会在本地建立一个服务器，监听3000端口，demo中的代码直接向该服务器发送请求。所以需要在服务器运行的情况下进行测试。

# 使用方法
1. 引入ajax2.js文件，该文件中定义了一个Ajax对象
2. 在引入上述文件之后，在自己的js里面，新建一个Ajax对象，设置method,data,url,callback函数，然后调用ajax.send()即可发送请求。

# 示例用法

```js
var ajax = new Ajax({
  method:'get',//设置ajax方法
  url:'http://localhost:3000',//设置通讯地址
  callback:function(res){//设置回调函数
     alert(res)
  },
  data: data//需要传递的数据
})
```
其中，data直接传递object即可，当get请求的时候内部会将data作为data添加到url后面，当是post请求的时候会将data转为JSON传递。
# 兼容性
因为直接使用的XMLHttpRequest，只要浏览器有这个方法就可以使用，别的地方均采用原生js实现，应该不存在别的兼容性问题

# 测试
其实ajax本身不难，但是学的时候感觉很吃力，为什么，我认为主要原因在于没有服务器端代码，这里我提供了一个我自己写的十分简单的服务器端代码，在
example/js_server中，在命令行执行node server.js即可运行服务器，监听http://localhost://3000。运行example测试的时候，需要在本地运行服务器端的代码，在ajax通信
的时候将url设定为http://localhost://3000即可。
