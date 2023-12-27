import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from 'http'
import { v4 as uuid } from "uuid";

let notes = []

const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('new connection: ', socket.id)

    socket.emit('server:loadnotes', notes)

    socket.on('client:newnote', newNote => {
        const note = { ...newNote, id: uuid() }
        notes.push({ ...newNote, id: uuid() })
        socket.emit('server:newnote', note)
    })

    socket.on('client:deletenote', nodeId => {
        notes = notes.filter(n => n.id !== nodeId)
        socket.emit('server:loadnotes', notes)
    })
})

server.listen(3000)

console.log('Server is listenning on port', 3000)