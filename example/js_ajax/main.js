;(function(){//立即执行函数，避免污染全局变量
  var button = document.getElementById('test');
  var button2 = document.getElementById('test2');
  var account = document.getElementById('account');
  var password = document.getElementById('password');
  button.onclick = function(){
    var data = {
      'account':account.value,
      'password':password.value
    };
    var ajax = new Ajax({      //新建Ajax对象，传入所需数据
      method:'get',//设置ajax方法
      url:'http://localhost:3000',//设置通讯地址
      callback:function(res){//设置回调函数
        alert(res)
      },
      data: data//需要传递的数据
    });
    ajax.send();//发送ajax请求
  }
  button2.onclick = function(){
    var data = {
      'account':account.value,
      'password':password.value
    };
    var ajax = new Ajax({
      method:'post',
      url:'http://localhost:3000',
      callback:function(res){
        alert(res)
      },
      data: data
    });
    ajax.send();
  }
})();
