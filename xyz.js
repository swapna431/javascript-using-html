const fs=require('fs')
fs.writeFile("xyz.txt","Every body rock your body",(err)=>{
    if(err)console.log(err)
        else console.log("successfully updated")
})
fs.appendFile("xyz.txt","BackStreet Back",(err)=>{
    if(err)console.log(err)
        else console.log("Successfully updated")
})
fs.unlink("xyz.txt",(err)=>{
    if(err)console.log(err)
        else console.log("Delete")
})