/*global require:true, define:true, suites:true */

require.config({
  // You wil most likely need to adapt the paths accordingly with your environment
  "baseUrl" : '..',
  "shim"    : {
    "mocha": { "exports": 'mocha' }
  },
  "paths"   : {
    "sinon"       : 'node_modules/sinon-chai/node_modules/sinon/lib',
    "chai"        : 'node_modules/chai/chai',
    "sinon-chai"  : 'node_modules/sinon-chai/lib/sinon-chai',
    "mocha"       : 'node_modules/mocha/mocha'
  }
});
    
define(['mocha'], function (mocha) {
  'use strict';
  mocha.setup('bdd');
  require(suites.map(function (s) { return './suites/' + s; }), function () {
    mocha.run();
  });
});

