+(function (window, webduino) {

    'use strict';
  
    window.getBME280= function (board, rx, tx) {
      return new webduino.module.BME280(board, rx, tx);
    };
  
  }(window, window.webduino));