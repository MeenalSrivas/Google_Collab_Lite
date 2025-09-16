import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app =express()
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"]
  }
});

const port = 4000

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  
  socket.on('disconnect', () => {
    console.log(` User disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(` Server is running on http://localhost:${port}`);
});
