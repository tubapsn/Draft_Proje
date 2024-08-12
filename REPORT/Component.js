sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "REPORT/model/models",
  ],
  function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("REPORT.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // // enable routing
         //this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

	document.title = this.getModel("i18n").getResourceBundle().getText("title");
      },
	getText: function(id){
			return this.getModel("i18n").getResourceBundle().getText(id);
		}
    });
  }
);
