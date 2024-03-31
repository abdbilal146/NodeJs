const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method
    if(url === '/'){
        res.write('<html><head>')
        res.write('<form  action="/message" method ="POST"><input></input><button type="submit">hello</button></form>')
        res.write('</head></html>')
        return res.end()
    }
    if(url === '/message' & method === 'POST'){
        const body = []
        req.on('data' , (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end' , ()=>{
            const parseBody = Buffer.concat(body)
        })
        fs.writeFileSync('message.txt','Dummy')
        res.statusCode = 302 
        res.setHeader('Location','/')
        return res.end()
    }
    
    console.log(req.url , req.method , req.headers)
    res.setHeader('Content-type' , 'text/html')
    const file = fs.readFileSync('hello.txt')
    res.write(file)
    res.end()
})

server.listen(3000)