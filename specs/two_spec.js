/*jshint node:true */
/*global describe:true, it:true */
(function () {
  "use strict";
  var args = Array.prototype.slice.apply(arguments), factory = args.pop(), deps = args;
  if (typeof exports !== 'undefined' && typeof require === 'function') { // Node.js
    if (typeof factory === 'function') {
      exports = factory.apply(undefined, deps.map(require));
    } else { deps.concat(factory).map(require); }
  } else if (typeof define === 'function' && define.amd) { // AMD
    if (typeof factory === 'function') {
      return define(deps, factory);
    } else { return define(deps.concat(factory)); }
  } else { // Global browser
    return factory.apply(undefined, deps.map(function(dep) { return this[dep]; }.bind(this)));
  }
})('init', function () {
  "use strict";
  describe("another test suite", function () {
    it("should succeed", function () {
      (true).should.be.true;
    });
  });
});

