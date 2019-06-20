'use strict';

let logger = require('../logger/logger.js');

describe('Logger module', () => {
  describe('fileSave', () => {
    it('Should console.log a message', () => {
      // arrange 
      let spy = jest.spyOn(console, 'log');

      // act
      logger.fileSave('message');
      // assert

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('fileError', () => {
    it('Should console.error a message', () => {
      // arrange 
      let spy = jest.spyOn(console, 'error');

      // act
      logger.fileError('message');
      // assert

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
  
});