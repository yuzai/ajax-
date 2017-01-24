function Ajax(obj){
  this.method = obj.method || 'get';
  this.url = obj.url || '';
  this.callback = obj.callback || '';
  this.data = obj.data || '';
};
Ajax.prototype.send = function(method,url,callback,data){
  var method = method || this.method;
  var data = data || this.data;
  var url = url || this.url;
  var callback = callback || this.callback;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4)
      callback(xhr.responseText);
  }
  if(method === 'get'){
    if(typeof data === 'object'){
      var data_send = '?';
      for(var key in data){
        data_send+=key+'='+data[key];
        data_send+='&';
      }
      data_send = data_send.slice(0,-1);
      console.log(data_send);
    }
    xhr.open(method,url+data_send,true);
    xhr.send(null);
  }else if(method === 'post'){
      xhr.open(method,url,true);
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xhr.send(JSON.stringify(data));
  }else {
    console.log('不识别的方法:'+method);
    return fasle;
  }
}
