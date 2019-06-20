'use strict';

let app = require('../app/app.js');

jest.mock('fs');

describe('app', () => {
  // describe('readFileWrapper()', () => {
  //   it('Should return file data', () => {
  //     // arrange
  //     let file = 'file.txt';

  //     // act
  //     return app.readFileWrapper(file)
  //       .then(data => {
  //         // assert
  //         expect(data).toBeDefined();
  //       });      
  //   });
  // });

  // describe('writeFileWrapper()', () => {
  //   it('Should resolve file', () => {
  //     // arrange
  //     let file = 'file.txt';

  //     // act
  //    return app.writeFileWrapper(file, 'text')
  //       .then(data => {
  //         // assert
  //         console.log(data);
  //         expect(data).toBeDefined();
  //       })
  //       .catch(err => {
  //         expect(err).toBeUndefined();
  //       });      
  //   });

  // it('Should reject the error if given bad file name', () => {
  //   // arrange
  //   let file = 'bad.txt';

  //   // act
  //   app.writeFile(file)
  //     .then(data => {
  //       expect(data).toBeUndefined();
  //     })
  //     .catch(err => {
  //       // assert
  //       console.log(err);
  //       expect(err).toBeDefined();
  //     })
  // });
  // });

  describe('caps()', () => {
    it('Should take data and return that data all caps', () => {
      // arrange
      let data = 'abcd';
      
      // act
      let result = app.caps(data);

      // assert
      expect(result).toEqual('ABCD');
    });
  });
});