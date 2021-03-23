/**
 *
 * @namespace faker.movies
 */
var movies = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * movies
     *
     * @method faker.movies.movies
     */
    self.movies = function () {
      return fake('{{movies.bollywood}} {{movies.tollywood}}');
    };
  
    self.movies.schema = {
      "description": "Generates a random movies.",
      "sampleResults": ["war", "sadak", "troy", "thor"]
    };
  
    /**
     * bollywood
     *
     * @method faker.movies.bollywood
     */
    self.bollywood = function () {
      return faker.random.arrayElement(faker.definitions.movies.bollywood);
    };
  
    self.bollywood.schema = {
      "description": "Generates a bollywood name.",
      "sampleResults": ["war", "dhoom", "sadak", "krish"]
    };
  
  
    /**
     * tollywood
     *
     * @method faker.movies.tollywood
     */
    self.tollywood = function () {
      return faker.random.arrayElement(faker.definitions.movies.tollywood);
    };
  
    self.tollywood.schema = {
      "description": "Generates a movies tollywood.",
      "sampleResults": ["kushi", "arjunreddy", "kaleja", "saho"]
    };
  
    /**
     * kollywood
     *
     * @method faker.movies.kollywood
     */
    self.kollywood = function () {
      return faker.random.arrayElement(faker.definitions.movies.kollywood);
    };
  
    self.kollywood.schema = {
      "description": "Generates a movies kollywood.",
      "sampleResults": ["vip", "demonticolony", "kaala", "singam"]
    };
  
    /**
     * hollywood
     *
     * @method faker.movies.hollywood
     */
    self.hollywood = function () {
      return faker.random.arrayElement(faker.definitions.movies.hollywood);
    };
  
    self.hollywood.schema = {
      "description": "Generates a hollywood kollywood.",
      "sampleResults": ["troy", "thor", "aquman", "harrypotter"]
    };


    /**
     * vin
     *
     * @method faker.movies.vin
     */
    self.vin = function () {
      return (
        faker.random.alphaNumeric(10) +
        faker.random.alpha({ count: 1, upcase: true }) +
        faker.random.alphaNumeric(1) +
        faker.random.number({ min: 10000, max: 100000}) // return five digit #
      ).toUpperCase();
    };
  
    self.vin.schema = {
      "description": "Generates a valid VIN number.",
      "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
    };
  
    /**
     * color
     *
     * @method faker.movies.color
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };
  
    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["red", "white", "black"]
    };
  };
  
  module["exports"] = movies;
  
