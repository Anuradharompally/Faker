/**
 *
 * @namespace faker.groceries
 */
var groceries = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * groceries
     *
     * @method faker.groceries.groceries
     */
    self.groceries = function () {
      return fake('{{groceries.fruits}} {{groceries.pulses}}');
    };
  
    self.groceries.schema = {
      "description": "Generates a random groceries.",
      "sampleResults": ["apple", "mango", "grapes","banana","green gram"]
    };
  
    /**
     * fruits
     *
     * @method faker.groceries.fruits
     */
    self.fruits = function () {
      return faker.random.arrayElement(faker.definitions.groceries.fruits);
    };
  
    self.fruits.schema = {
      "description": "Generates a fruits name.",
      "sampleResults": ["apple", "mango", "grapes","banana"]
    };
  
  
    /**
     * pulses
     *
     * @method faker.groceries.pulses
     */
    self.pulses = function () {
      return faker.random.arrayElement(faker.definitions.groceries.pulses);
    };
  
    self.pulses.schema = {
      "description": "Generates a groceries pulses.",
      "sampleResults": ["green gram", "peas", "red gram","yellow gram"]
    };
  
    /**
     * type
     *
     * @method faker.groceries.type
     */
    self.type = function () {
      return faker.random.arrayElement(faker.definitions.groceries.type);
    };
  
    self.type.schema = {
      "description": "Generates a groceries type.",
      "sampleResults": ["vegetables", "fruits", "bread", "pulses"]
    };
  
    /**
     * vegetables
     *
     * @method faker.groceries.vegetables
     */
    self.vegetables = function () {
      return faker.random.arrayElement(faker.definitions.groceries.vegetables);
    };
  
    self.vegetables.schema = {
      "description": "Generates a vegetables type.",
      "sampleResults": ["tomato", "potato", "onion","brinjal"]
    };
  
    /**
     * vin
     *
     * @method faker.groceries.vin
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
     * @method faker.groceries.color
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };
  
    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["red", "white", "black"]
    };
  };
  
  module["exports"] = groceries;