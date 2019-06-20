'use strict';

const fs = require('fs');

// Setup socket.io-client
const io = require('socket.io-client');

// connect to server.js
const socket = io.connect('http://localhost:3001');

const alterFile = (file) => {
  readFileWrapper(file)
    .then(data => {
      writeFileWrapper(file, caps(data));
    })
    .then((file) => {
      let message = {
        name: 'save',
        message: `File saved in ${file}!`,
      };

      emitFileSave(message);
    })
    .catch(() => {
      let error = {
        name: 'error',
        message: 'ERROR: something went wrong',
      };

      socket.emit('file-error', JSON.stringify(error));
    });
};

let readFileWrapper = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile( file, (err, data) => {
      if(err) { 
        reject(err); 
      } else {
        resolve(data.toString());
      }
    });
  });
};

let caps = (data) => {
  console.log(data);
  return data.toUpperCase();
};

let emitFileSave = (payload) => {
  socket.emit('file-save', payload);
};

let writeFileWrapper = (file, text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile( file, Buffer.from(text), (err) => {
      if(err) {
        reject(err); 
      } else {
        resolve(file);
      }
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = exports = {readFileWrapper, caps, writeFileWrapper};
