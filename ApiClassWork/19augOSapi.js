const os=require("os");
console.log("Free memory : ",os.freemem());
console.log("Current version is : " , os.version())
console.log("Plateform : ",os.platform())
console.log("Total memory : ",os.totalmem())
console.log("CPU architecture : ",os.arch())
console.log("CPU information : ",os.cpus())
console.log("Home directory : ",os.homedir())
console.log("Host name : ",os.hostname())
