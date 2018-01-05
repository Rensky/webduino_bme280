+(function (window, webduino) {

    'use strict';
  
    window.getBME280= function (board) {
      return new webduino.module.BME280(board);
    };
  
  }(window, window.webduino));
