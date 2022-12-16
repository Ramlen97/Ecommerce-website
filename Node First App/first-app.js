// first-app.js
const http=require('http');
const server=http.createServer((req,res)=>{
    
    // process.exit();
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    if(req.url=='/home'){
        res.write('<body><h2>Welcome home</h2></body>');
    }
    else if(req.url=='/about'){
        res.write('<body><h2>Welcome to About us page</h2></body>');
    }
    else if(req.url=='/node'){
        res.write('<body><h2>Welcome to my Node.JS project</h2></body>');
    }
    res.write('</html>');
    res.end();
});
server.listen(4000);