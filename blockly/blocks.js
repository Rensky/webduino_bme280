var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['bme280_setup'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("設定")
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField("腳位為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bme280_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BME280，")
        .appendField("SDA")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin1")
        .appendField("SCL")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin2");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bme280_sencing'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField("偵測")
        .appendField(new Blockly.FieldDropdown([["temperature","temperature"], ["humidity","humidity"], ["Atmospheric pressure","Atmospheric pressure"]]), "bme280_data")
        .appendField("，每");
    this.appendDummyInput()
        .appendField("毫(1/1000)秒偵測一次");
    this.appendStatementInput("bugcan_sencing_go")
        .setCheck(null)
        .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['bme280_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("BME280"), "BME280")
        .appendField("所測得目前的")
        .appendField(new Blockly.FieldDropdown([["temperature","temperature"], ["humidity","humidity"], ["Atmospheric pressure","Atmospheric pressure"]]), "bme280_data");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};