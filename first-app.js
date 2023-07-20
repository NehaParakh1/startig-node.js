const http=require('http');

const name='Neha Parakh';

const server= http.createServer((req, res)=>{
 console.log(req)
    console.log(name);
})

server.listen(4000);
