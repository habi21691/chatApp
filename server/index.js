const express = require('express')
const app = express()
const http = require('http')

const { Server } = require('socket.io')
const cors = require('cors')

 
app.use(cors()) 

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected : ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`user with id: ${socket.id} join_room:  ${data}`)
    })

    socket.on("Send_Message", (data)=>{
        socket.to(data.room).emit("receive_Message", data)
        //  console.log(data)
    })

    socket.on('disconnected', () => {
        console.log(`user Disconnected`,socket.id)
    })
})


server.listen(3001, () => {
    console.log('server is up and running ....')
})