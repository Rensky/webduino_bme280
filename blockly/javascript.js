Blockly.JavaScript['bme280_setup'] = function(block) {
  var variable_bme280 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BME280'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bme280_pin'] = function(block) {
  var dropdown_uno_dpin1 = block.getFieldValue('uno_Dpin1');
  var dropdown_uno_dpin2 = block.getFieldValue('uno_Dpin2');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bme280_sencing'] = function(block) {
  var variable_bme280 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BME280'), Blockly.Variables.NAME_TYPE);
  var dropdown_bme280_data = block.getFieldValue('bme280_data');
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_bugcan_sencing_go = Blockly.JavaScript.statementToCode(block, 'bugcan_sencing_go');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bme280_display'] = function(block) {
  var variable_bme280 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BME280'), Blockly.Variables.NAME_TYPE);
  var dropdown_bme280_data = block.getFieldValue('bme280_data');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};