'use strict';

module.exports = {
  normalizeEntityName: function() {},
  
  afterInstall: function() {
    return this.addBowerPackageToProject('inert-polyfill', '^0.2.1');
  }
};
