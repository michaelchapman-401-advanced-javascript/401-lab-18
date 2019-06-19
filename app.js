'use strict';

const fs = require('fs');

// Setup socket.io-client
const io = require('socket.io-client');

// connect to server.js
const socket = io.connect('http://localhost:3001');

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, caps(data));
    })
    .catch(() => {
      let error = {
        name: 'error',
        message: 'ERROR: something went wrong',
      };
      console.log('ERROR');
      socket.emit('file-error', JSON.stringify(error));
    });
};

let readFile = (file) => {
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
  return data.toUpperCase();
};

let writeFile = (file, text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile( file, Buffer.from(text), (err) => {
      if(err) {
        reject(err); 
      } else {
        let message = {
          name: 'save',
          message: `SAVE: File saved to ${file}`,
        };
        console.log('SAVE');
        socket.emit('file-save', JSON.stringify(message));
      }
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
