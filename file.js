const fs = require('fs')


async function hello(){
    fs.writeFileSync('hellol.txt','hellothre')
    const file = fs.readFileSync('hellol.txt',{encoding : "utf-8"})
    console.log(file)
}

hello()