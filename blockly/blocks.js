var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['BME280_setup'] = {
  init: function() {
    this.appendValueInput("BME280")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_BME280_SET, "Setting")
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField(Blockly.Msg.WEBDUINO_BME280_PIN, "pins");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['BME280_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_BME280_TPIN, "BME280,")
        .appendField(Blockly.Msg.WEBDUINO_BME280_SDA, "SDA")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin1")
        .appendField(Blockly.Msg.WEBDUINO_BME280_SCL, "SCL")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin2");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['BME280_sencing'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField(Blockly.Msg.WEBDUINO_BME280_DETECT, "detect")
        .appendField(new Blockly.FieldDropdown([["temperature","temperature"], ["humidity","humidity"], ["Atmospheric pressure","Atmospheric pressure"]]), "bme280_data")
        .appendField(Blockly.Msg.WEBDUINO_BME280_EVERY, ", every");
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_BME280_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("BME280_sencing_go")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_BME280_DO, "do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['BME280_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField(Blockly.Msg.WEBDUINO_BME280_DETECTED, "The detected data: ")
        .appendField(new Blockly.FieldDropdown([["temperature","temperature"], ["humidity","humidity"], ["Atmospheric pressure","Atmospheric pressure"]]), "bme280_data");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};