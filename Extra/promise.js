const promise=new Promise((resolve,reject)=>
{
    setTimeout (()=>{
        // resolve("Found data");
        reject("Not found data");
    },2000);
});
promise
 .then((result)=>{                 
    console.log(result);
})
.catch((error)=>{
    console.log(error);

});
