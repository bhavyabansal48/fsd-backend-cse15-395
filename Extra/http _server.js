// Write a node.js program to create a basic http serveer that handles different url routes 
// the server should :
// Display home page when the user visits /.
// display about page when the user visits /about.
// return a 404 status code and display page not found for any invalid url .
//provide a link to return to the home page on the 404 page.
//run the server on port 3000.
const http=require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
          res.write("home page");
          res.end();
    }
    else if(req.url=="/about"){
        res.write("about page");
        res.end();
    }
    else{
        res.write("404 page not found");
        res.end();
    }
});
server.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});