const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

app.use(cors())
let users = []
let rooms = []

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)  
    socket.on("message", data => {
      socketIO.emit("messageResponse", data)
    })

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on("newUser", data => {
      users.push(data)
      socketIO.emit("newUserResponse", users)
    })
    socket.on('createRoom', roomName => {
        const existingRoom = room.find(room => room.name === roomName)
        if (existingRoom){
            socket.emit('roomError', 'Room already exist')
        }else{
            const room = {name: roomName, user: [socket.id]}
            room.push(room)
            socket.join(roomName)
            socket.emit('roomCreated', room)
        }
    })
    socket.on('joinRoom', roomName => {
        const room = rooms.find(room => room.name === roomName)
        if (room) {
            room.users.push(socket.id)
            socket.join(roomName)
            socket.emit('roomJoined', room)
        } else{
            socket.emit('roomError', 'Room not found')
        }
    })

    socket.on('leaveRoom', roomName => {
        const roomIndex = rooms.findIndex(room => room.name === roomName)
        if (roomIndex !== -1){
            const room = rooms[roomIndex]
            room.users = room.users.filter(user => user !== socket.id)
            if (room.user.length === 0){
                room.splice(roomIndex, 1)
            }
            socket.leave(roomName)
            socket.emit('roomLeft', room)
        }else{
            socket.emit('roomError', 'Room not found')
        }
    })
 
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketID !== socket.id)
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});

app.get("/api", (req, res) => {
  res.json({message: "Hello"})
});

   
http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
