/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-inert-polyfill',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(path.join(app.bowerDirectory, 'inert-polyfill/inert-polyfill.min.js'));
    }
  }
};
