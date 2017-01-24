var button = document.getElementById('test');
var button2 = document.getElementById('test2');
var account = document.getElementById('account');
var password = document.getElementById('password');
button.onclick = function(){
  var data = {
    'account':account.value,
    'password':password.value
  };
  var ajax = new Ajax({
    method:'get',
    url:'http://localhost:3000',
    callback:function(res){
      alert(res)
    },
    data: data
  });
  ajax.send();
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
