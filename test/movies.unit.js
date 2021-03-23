if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("movies.js", function () {
    describe("movies()", function () {
        it("returns a random movies", function () {
            sinon.stub(faker.movies, 'movies').returns('dhoom');
            var movies = faker.movies.movies();
  
            assert.equal(movies, 'dhoom');
            faker.movies.movies.restore();
        });
    });
  
    describe("bollywood()", function () {
        it("returns random bollywood", function () {
            sinon.stub(faker.movies, 'bollywood').returns('war');
            var bollywood = faker.movies.bollywood();
  
            assert.equal(bollywood, 'war');
            faker.movies.bollywood.restore();
        });
    });
  
    describe("kollywood()", function () {
      it("returns random movies kollywood", function () {
        sinon.stub(faker.movies, 'kollywood').returns('singam');
            var kollywood = faker.movies.kollywood();
  
            assert.equal(kollywood, 'singam');
            faker.movies.kollywood.restore();
        });
    });
  
    describe("hollywood()", function () {
        it("returns a hollywood kollywood", function () {
            sinon.stub(faker.movies, 'hollywood').returns('troy');
            var hollywood = faker.movies.hollywood();
  
            assert.equal(hollywood, 'troy');
            faker.movies.hollywood.restore();
        });
    });
  
    describe("vin()", function () {
        it("returns valid vin number", function () {
          var vin = faker.movies.vin();
          assert.ok(vin.match(/^[A-Z0-9]{10}[A-Z]{1}[A-Z0-9]{1}\d{5}$/));
        });
    });
  
    describe("color()", function () {
        it("returns a random color", function () {
            sinon.stub(faker.movies, 'color').returns('black');
            var color = faker.movies.color();
  
            assert.equal(color, 'black');
            faker.movies.color.restore();
        });
    });
  });
  