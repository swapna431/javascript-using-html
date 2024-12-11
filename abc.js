const fs=require('fs')
fs.readFile('abc.txt',(err,data)=>{
    if(err)console.log(err)
    else console.log(data.toString())
})
fs.rename("abc.txt","def.txt",(err)=>{
    if(err)console.log(err)
        else console.log("rename")
})