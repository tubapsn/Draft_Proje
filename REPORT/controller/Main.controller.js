

sap.ui.define(
	[
	  "sap/ui/core/mvc/Controller",
	  "sap/ui/model/json/JSONModel",
	  "sap/m/MessageToast",
	  "sap/m/MessageBox",
	  "sap/ui/core/Fragment",
	  "REPORT/model/formatter",
	  "common/transactionCaller"
  
	],
	function (
	  Controller,
	  JSONModel,
	  MessageToast,
	  MessageBox,
	  Fragment,
	  formatter,
	  TransactionCaller,
  
	) {
	  "use strict";
	  let tempData = [];
	  let index = 0;
	  return Controller.extend("REPORT.controller.Main", {
		onInit: function () {

  
		},
		
	  });
	}
  );

  