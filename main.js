var ajax = new Ajax({
  method:'post',
  url:'http://localhost:3000',
  callback:function(res){
    console.log(res)
  },
  data: {
    name:'xiaobo',
    age:'21',
    password:'123456'
  }
});
ajax.send();
