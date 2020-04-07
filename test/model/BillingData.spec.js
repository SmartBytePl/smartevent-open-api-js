/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.11
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
    instance = new SmartEventOpenApi.BillingData();
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

  describe('BillingData', function() {
    it('should create an instance of BillingData', function() {
      // uncomment below and update the code to test BillingData
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be.a(SmartEventOpenApi.BillingData);
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

    it('should have the property taxId (base name: "tax_id")', function() {
      // uncomment below and update the code to test the property taxId
      //var instane = new SmartEventOpenApi.BillingData();
      //expect(instance).to.be();
    });

  });

}));
