# LAB - 18

## socket.io

### Author: Michael

### Links and Resources
* [submission PR](https://github.com/michaelchapman-401-advanced-javascript/lab-18/pull/1)
* [travis](https://travis-ci.org/michaelchapman-401-advanced-javascript/lab-18)

### Modules
#### `app.js`
##### Read data from file, caps data, write data back to file

###### `readFileWrapper(fileName) -> file data`
Read the contents of a file and return it

###### `writeFileWrapper(fileName, text) -> file data`
Take the data and write it back to the appropriate file

###### `caps(text) -> text`
Take the text and turn it to all caps

### Setup
#### `.env` requirements
* None

#### Running the app
* `node server.js`
* `node logger.js`
* `node app.js <filename>`
#### Tests
* npm test

#### UML
![UML](./assets/UML.jpg)
# lab-18