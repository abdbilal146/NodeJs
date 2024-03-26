const http = require('http')
const fs = require('fs')


const server = http.createServer((req , res)=>{
    const url = req.url
    if(url === '/HomePage'){
        
        return res.end()
    }
})

server.listen(5555)