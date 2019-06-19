'use strict';

// Setup socket.io-client
const io = require('socket.io-client');

// connect to server.js
const socket = io.connect('http://localhost:3001');

let fileSave = (message) => {
  // console.log(message);
  console.log(message);
};

let fileError = (message) => {
  // console.error(message)
  console.error(message);
};

// Listen for file-save event
socket.on('file-save', fileSave);

// Listen for file-error event
socket.on('file-error', fileError);
