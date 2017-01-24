var button = document.getElementById('test');
var button2 = document.getElementById('test2');
button.onclick = (function(i){
  function addurl(url,name,value){
    url += (url.indexOf("?")===-1?'?':'&');
    url += encodeURIComponent(name)+'='+encodeURIComponent(value);
    return url;
  }
  return function(){
      i++;
      var data = prompt('xiaobo','http://localhost:3000/');
      if(data){
          data = addurl(data,'name','xiaobo');
          var xhr =new XMLHttpRequest();
          xhr.onreadystatechange = function(){
              console.log(xhr.readyState);
              if(xhr.readyState === 4){
                if(xhr.status>=200 && xhr.status < 300||xhr.status === 304 || xhr.status === 0){
                  alert("Request "+i+": "+xhr.responseText);
                }
                else {
                  alert("unsuccessful "+xhr.status);
                }
              }
          }
          xhr.open('get',data,true);
          xhr.send(null);
       }
  }
})(0)

button2.onclick = (function(i){
  var account = document.getElementById('account');
  var password = document.getElementById('password');
  return function(){
    i++;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState === 4){
          if(xhr.status>=200 && xhr.status < 300||xhr.status === 304 || xhr.status === 0){
            alert("Request "+i+": "+xhr.responseText);
          }
          else {
            alert("unsuccessful "+xhr.status);
          }
        }
    }
    xhr.open('post','http://localhost:3000/',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(JSON.stringify({'account':account.value,'password':password.value}));
  }
})(0)
