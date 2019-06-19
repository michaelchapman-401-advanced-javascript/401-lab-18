'use strict';

const fs = require('fs');

// Setup socket.io-client
const io = require('socket.io-client');

// connect to server.js
const socket = io.connect('http://localhost:3001');

/**
 * @module alterFile
 * @param {string} file - Name of the file to read from
 * @desc Handles promise chain for read and write file
 */
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

/**
 * @module readFile
 * @param {string} file - Name of the file to read from
 * @desc Handles reading the file and turning it's data to string
 */
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

/**
 * @module caps
 * @param {string} file - Name of the file to read from
 * @param {string} text - The text from the file
 * @desc Handles changing the text to all uppercase
 */
let caps = (data) => {
  return data.toUpperCase();
};

/**
 * @module writeFile
 * @param {string} file - Name of the file to read from
 * @param {string} text - The text from the file
 * @desc Writes the text to the file
 */
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
