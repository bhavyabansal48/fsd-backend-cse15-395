// const fs=require("fs");
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     console.log(err,data);
// });
// console.log("Finished reading file");
const fs=require("fs");
fs.writeFileSync("data.txt","Hello World");
console.log(fs.readFileSync("data.txt","utf-8"));
fs.appendFileSync("data.txt","\nHello World 2");
console.log(fs.readFileSync("data.txt","utf-8"));
fs.unlinkSync("data.txt");
console.log("File deleted");