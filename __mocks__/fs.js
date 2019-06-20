'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(null, new Buffer('success'));
  }
};

exports.writeFile = (file, text, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  }else{
    cb(null, null);
  }
};
