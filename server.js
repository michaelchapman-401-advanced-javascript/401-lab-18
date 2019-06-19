'use strict';

// Set up socket.io server
const io = require('socket.io')(3001);

// Listen for connections to the server
io.on('connection', socket => {
  // Listen for file-save event
  socket.on('file-save', payload => {
    // emit file-save event to logger
    socket.emit('file-save', payload);
  });
  
  // Listen for file-error event
  socket.on('file-error', payload => {
    socket.emit('file-error', payload);
  });
  // emit file-error event to logger
});
