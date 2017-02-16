var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
  console.log(req.method);
  if(req.method==='GET'){//处理get请求
      var time = new Date();
      var time = time.getTime() + 24*60*60*1000;//按ms计算，一天
      var time2 = new Date(time);
      var timeObj = time2.toGMTString();
      res.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":null,
      	'Set-Cookie':'myCookie="type=ninja",language="javascript";Expires = '+timeObj,'Access-Control-Allow-Credentials':true});
      res.end(util.inspect(url.parse(req.url, true)));//处理get请求，并将结果传递给客户端
  }
  else if(req.method === 'OPTIONS'){
  	res.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":null,'Access-Control-Allow-Methods': 'GET, POST, PUT','Access-Control-Allow-Headers':'If-Modified-Since',
      	'Set-Cookie':'myCookie="type=ninja",language="javascript";Expires = '+timeObj,'Access-Control-Allow-Credentials':true});
      res.end();//处理get请求，并将结果传递给客户端
  }
  else{//处理post请求
      // 定义了一个post变量，用于暂存请求体的信息
        var post = '';

        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function(chunk){
            post += chunk;
        });

        // 在end事件触发后然后向客户端返回。
        req.on('end', function(){
            post = JSON.parse(post);
            console.log(post);
            res.writeHead(200,{'content-Type':'text/plain',"Access-Control-Allow-Origin":"null",'Set-Cookie':'myCookie="type=ninja"','Access-Control-Allow-Credentials':true});
            res.end(util.inspect(post));
        });
    }
}).listen(3000);
console.log('server is listening on "3000"');
