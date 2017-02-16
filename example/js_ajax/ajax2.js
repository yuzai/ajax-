function Ajax(obj){
  this.method = obj.method || '';
  this.url = obj.url || '';
  this.callback = obj.callback || '';
  this.data = obj.data || '';
};
Ajax.prototype.send = function(method,url,callback,data){
  var method = method || this.method;
  var data = data || this.data;
  var url = url || this.url;
  var callback = callback || this.callback;
  var xhr = new XMLHttpRequest();//新建ajax请求，不兼容IE7以下
  xhr.onreadystatechange = function(){//注册回调函数
    if(xhr.readyState === 4)
      callback(xhr.responseText);
  }
  xhr.onerror = function(err){
    console.log(err);
  }
  if(method === 'get'){//如果是get方法，需要把data中的数据转化作为url传递给服务器
    if(typeof data === 'object'){
      var data_send = '?';
      for(var key in data){
        data_send+=key+'='+data[key];
        data_send+='&';
      }
      data_send = data_send.slice(0,-1);
      console.log(data_send);
    }
    xhr.withCredentials = true;
    xhr.open(method,url+data_send,true);
    xhr.send(null);
  }else if(method === 'post'){//如果是post，需要在头中添加content-type说明
      xhr.open(method,url,true);
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xhr.send(JSON.stringify(data));//发送的数据需要转化成JSON格式
  }else {
    console.log('不识别的方法:'+method);
    return fasle;
  }
}
