//  This function runs when a spreadsheet file is opened
//  Adds options to menu, if the code is inside an add-on it will add the options in a submenu  in Add-ons

function onOpen(e){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('UNC')
      .addItem('Show Spreadsheet ID', 'showID')
      .addToUi();
}

/**
 * Standard Deviation Propagator. 
 * Returns 'result' parameter. The function does nothing on it's own. Calculations should be manually invoked from client's machine through Python Sheets API.
 * @param {0} result Any value here, it will be changed when processed.
 * @param {"x*x"} formula Formula string.
 * @param {"x", 10, 1[,"y",20,2,...]} vars Syntax: <varName>, <value>, <error>
 * @param {"x"} returnType Options: 'n' for number value, 's' for standard deviation and 'me' for maximum error.
 * @customfunction
 */
function UNC(result,formula,vars,returnType){
  return result;
}

function showID(){
  var ui = SpreadsheetApp.getUi();
  ui.alert('Spreadsheet ID:', SpreadsheetApp.getActiveSpreadsheet().getId(), ui.ButtonSet.OK);
}