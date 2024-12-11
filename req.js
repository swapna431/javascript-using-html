const http=require('http')
const serv=http.createServer((req,re)=>{
    resizeBy.write("such feeling comin ove on me")
    resizeBy.end()
})
serv.listen(5050,()=>{
    console.log("server started")
})