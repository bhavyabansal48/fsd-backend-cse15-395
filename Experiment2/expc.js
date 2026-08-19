const fs=require("fs");
fs.writeFileSync("data.txt","Student Record");

fs.appendFileSync("data.txt","\nName:Bhavya Bansal ");

fs.appendFileSync("data.txt","\nRoll No: 123456 ");

fs.appendFileSync("data.txt","\nBranch: CSE ");
console.log(fs.readFileSync("data.txt","utf-8"));