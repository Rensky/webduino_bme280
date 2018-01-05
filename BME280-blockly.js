+(function (window, webduino) {

    'use strict';
  
    window.getBME280= function (board, pin) {
      return new webduino.module.BME280(board, board.getDigitalPin(pin));
    };
  
  }(window, window.webduino));
