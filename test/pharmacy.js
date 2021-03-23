if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("pharmacy.js", function () {
    describe("pharmacy()", function () {
        it("returns a random pharmacy", function () {
            sinon.stub(faker.pharmacy, 'pharmacy').returns('crocin');
            var pharmacy = faker.pharmacy.pharmacy();
  
            assert.equal(pharmacy, 'crocin');
            faker.pharmacy.pharmacy.restore();
        });
    });
  
    describe("syrups()", function () {
        it("returns random syrups", function () {
            sinon.stub(faker.pharmacy, 'syrups').returns('zincovite');
            var syrups = faker.pharmacy.syrups();
  
            assert.equal(syrups, 'zincovite');
            faker.pharmacy.syrups.restore();
        });
    });
  
    describe("vaccine()", function () {
      it("returns random pharmacy vaccine", function () {
        sinon.stub(faker.pharmacy, 'vaccine').returns('polio');
            var vaccine = faker.pharmacy.vaccine();
  
            assert.equal(vaccine, 'polio');
            faker.pharmacy.vaccine.restore();
        });
    });
  
    describe("surgical()", function () {
        it("returns a surgical vaccine", function () {
            sinon.stub(faker.pharmacy, 'surgical').returns('gloves');
            var surgical = faker.pharmacy.surgical();
  
            assert.equal(surgical, 'gloves');
            faker.pharmacy.surgical.restore();
        });
    });
  
    describe("vin()", function () {
        it("returns valid vin number", function () {
          var vin = faker.pharmacy.vin();
          assert.ok(vin.match(/^[A-Z0-9]{10}[A-Z]{1}[A-Z0-9]{1}\d{5}$/));
        });
    });
  
    describe("color()", function () {
        it("returns a random color", function () {
            sinon.stub(faker.pharmacy, 'color').returns('black');
            var color = faker.pharmacy.color();
  
            assert.equal(color, 'black');
            faker.pharmacy.color.restore();
        });
    });
  });
  