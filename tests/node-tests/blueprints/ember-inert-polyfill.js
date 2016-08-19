/* jshint node:true */
'use strict';

var bower = require('bower');
var assert = require('assert');
var readFileSync = require('fs').readFileSync;

var BLUEPRINT_PATH = 'blueprints/ember-inert-polyfill/index.js';
var message = 'The version of the intert-polyfill added to consuiming projects should match the version in the addon\'s dependencies';

bower.commands.list().on('end', function(packageInfo) {
  var addonDependencyVersion = packageInfo.dependencies['inert-polyfill'].endpoint.target;
  var blueprintContent = readFileSync(BLUEPRINT_PATH, 'utf-8');

  assert.ok(blueprintContent.indexOf(addonDependencyVersion) !== -1, message);
});
