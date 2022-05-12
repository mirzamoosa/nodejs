//const {console}= require('console');
const http =require('http');
const fs =require('fs');
const port =process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
  //console.log(req,url)
  
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html')
  if(req.url == '/'){
  res.end("<h1>This is nodejs tutorial</h1>")
}
else if(req.url == '/hello'){
    res.statusCode =200;
    const data =fs.readFileSync('index.html')
    res.end(data.toString())
}
else if(req.url == '/about'){
    res.statusCode =404;
    res.end("<h1>This is About code not found</h1>")
}
}); 
server.listen(port,()=>{
 console.log(`server is listening on port ${port}`)
 console.log('sdsd');
})