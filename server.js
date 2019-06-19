'use strict';

// Set up socket.io server
const io = require('socket.io')(3001);

// Listen for connections to the server
io.on('connection', socket => {
  console.log(`Connection from: ${socket.id}`);
  // Listen for file-save event
  socket.on('file-save', payload => {
    console.log('file-save');
    // emit file-save event to logger
    io.emit('file-save', payload);
  });
  
  // Listen for file-error event
  socket.on('file-error', payload => {
    console.log('file-error');
    // emit file-error event to logger
    io.emit('file-error', payload);
  });
});
