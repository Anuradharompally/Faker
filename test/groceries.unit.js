if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("groceries.js", function () {
    describe("groceries()", function () {
        it("returns a random groceries", function () {
            sinon.stub(faker.groceries, 'groceries').returns('mango');
            var groceries = faker.groceries.groceries();
  
            assert.equal(groceries, 'mango');
            faker.groceries.groceries.restore();
        });
    });
  
    describe("fruits()", function () {
        it("returns random fruits", function () {
            sinon.stub(faker.groceries, 'fruits').returns('apple');
            var fruits = faker.groceries.fruits();
  
            assert.equal(fruits, 'apple');
            faker.groceries.fruits.restore();
        });
    });
  
    describe("type()", function () {
      it("returns random groceries type", function () {
        sinon.stub(faker.groceries, 'type').returns('vegetables');
            var type = faker.groceries.type();
  
            assert.equal(type, 'vegetables');
            faker.groceries.type.restore();
        });
    });
  
    describe("vegetables()", function () {
        it("returns a vegetables type", function () {
            sinon.stub(faker.groceries, 'vegetables').returns('tomato');
            var vegetables = faker.groceries.vegetables();
  
            assert.equal(vegetables, 'tomato');
            faker.groceries.vegetables.restore();
        });
    });
  
    describe("vin()", function () {
        it("returns valid vin number", function () {
          var vin = faker.groceries.vin();
          assert.ok(vin.match(/^[A-Z0-9]{10}[A-Z]{1}[A-Z0-9]{1}\d{5}$/));
        });
    });
  
    describe("color()", function () {
        it("returns a random color", function () {
            sinon.stub(faker.groceries, 'color').returns('black');
            var color = faker.groceries.color();
  
            assert.equal(color, 'black');
            faker.groceries.color.restore();
        });
    });
  });
  