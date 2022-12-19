// first-app.js
const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // process.exit();
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        return fs.readFile('message.txt',(err,data)=>{     
            res.write('<html>')
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
        })
        
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const messageArr=parsedBody.split('=')[1].split('+');
            let message=messageArr[0];
            for(let i=1;i<messageArr.length;i++){
                message=message+' '+messageArr[i];
            }
            console.log(message);
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/');                
                return res.end();
            });                   
        })        
    }
    
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h2>Welcome to my Node.JS project</h2></body>');
    res.write('</html>');
    return res.end();
});
server.listen(4000);