/**
 *
 * @namespace faker.pharmacy
 */
var pharmacy = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * pharmacy
   *
   * @method faker.pharmacy.pharmacy
   */
  self.pharmacy = function () {
    return fake('{{pharmacy.syrups}} {{pharmacy.tablets}}');
  };

  self.pharmacy.schema = {
    "description": "Generates a random pharmacy.",
    "sampleResults": ["zincovite", "iron", "neruobin","ciplex"]
  };

  /**
   * syrups
   *
   * @method faker.pharmacy.syrups
   */
  self.syrups = function () {
    return faker.random.arrayElement(faker.definitions.pharmacy.syrups);
  };

  self.syrups.schema = {
    "description": "Generates a syrups name.",
    "sampleResults": ["zincovite", "iron", "bcomplex", "crocin"]
  };


  /**
   * tablets
   *
   * @method faker.pharmacy.tablets
   */
  self.tablets = function () {
    return faker.random.arrayElement(faker.definitions.pharmacy.tablets);
  };

  self.tablets.schema = {
    "description": "Generates a pharmacy tablets.",
    "sampleResults": ["paracetamol", "Combinflam", "neurobin","ciplex"]
  };

  /**
   * vaccine
   *
   * @method faker.pharmacy.vaccine
   */
  self.vaccine = function () {
    return faker.random.arrayElement(faker.definitions.pharmacy.vaccine);
  };

  self.vaccine.schema = {
    "description": "Generates a pharmacy vaccine.",
    "sampleResults": ["swineflu", "polio", "measles", "hepitatisb"]
  };

  /**
   * surgical
   *
   * @method faker.pharmacy.surgical
   */
  self.surgical = function () {
    return faker.random.arrayElement(faker.definitions.pharmacy.surgical);
  };

  self.surgical.schema = {
    "description": "Generates a surgical vaccine.",
    "sampleResults": ["scissors", "blades", "gloves",  "needles"]
  };

  /**
   * vin
   *
   * @method faker.pharmacy.vin
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
   * @method faker.pharmacy.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };
};

module["exports"] = pharmacy;
