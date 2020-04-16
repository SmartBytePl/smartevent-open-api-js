/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.15
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmartEventOpenApi);
  }
}(this, function(expect, SmartEventOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmartEventOpenApi.Ticket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ticket', function() {
    it('should create an instance of Ticket', function() {
      // uncomment below and update the code to test Ticket
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be.a(SmartEventOpenApi.Ticket);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property onHold (base name: "on_hold")', function() {
      // uncomment below and update the code to test the property onHold
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property onHand (base name: "on_hand")', function() {
      // uncomment below and update the code to test the property onHand
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property alternativeOnHand (base name: "alternative_on_hand")', function() {
      // uncomment below and update the code to test the property alternativeOnHand
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property tracked (base name: "tracked")', function() {
      // uncomment below and update the code to test the property tracked
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property visibleAfterSoldOut (base name: "visible_after_sold_out")', function() {
      // uncomment below and update the code to test the property visibleAfterSoldOut
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property salableAfterSoldOut (base name: "salable_after_sold_out")', function() {
      // uncomment below and update the code to test the property salableAfterSoldOut
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property taxCategory (base name: "tax_category")', function() {
      // uncomment below and update the code to test the property taxCategory
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property channelPricings (base name: "channel_pricings")', function() {
      // uncomment below and update the code to test the property channelPricings
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new SmartEventOpenApi.Ticket();
      //expect(instance).to.be();
    });

  });

}));
