// const os = require('os')

// console.log(os.platform())

// console.log(os.hostname())

// console.log(os.version())

// console.log(os.uptime())

// console.log(os.totalmem()/1024/1024/1024)

// console.log(os.freemem()/1024/1024/1024)


// console.log(os.cpus())

// console.log(os.cpus().length)

const console = require("console")
const fs = require("fs")
const { stringify } = require("querystring")

// fs.writeFile("data.txt","Hello World",(err)=>{
//  if(err) console.log(err)
//   else console.log("File Written")
// })

// fs.readFile("data.txt","utf8",(err,res)=>{
//   if(err) console.log(err)
//    else console.log("File Written")
// })

// fs.appendFile("data.txt","/n3rd Sem",(err)=>{
//   if(err) console.log(err)
//    else console.log("File uptated")
// })

// fs.unlink("data.txt",(err)=>{
//   if(err) console.log(err)
//    else console.log("File Deleted Successfullt")
// })

const data = {name:"pritam",Age:20,city:"Delhi"}

fs.writeFile("db.json",JSON>stringify(data,["name","city"],4),
(err)=>{
  if(err) console.log(err)
  else console.log("File Written")
})




