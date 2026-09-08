const http=require("http");
const server = http.createServer((req,res)=>{
    console.log(req.method);
    res.end("Request Received");
});
server.listen(3000);