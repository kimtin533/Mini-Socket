const express = require('express')
const app = express()
const port = 8000
const { Server } = require("socket.io")
const http = require('http')
const server = http.createServer(app)
const io = new Server(server)


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', (socket)=>{
    socket.on('on-chat', data=>{
        console.log({data})
        // io.emit('all-user', data)
    })
})
server.listen(port, ()=> {
    console.log(`server đang chạy tại: http://localhost:${port}`)
})
