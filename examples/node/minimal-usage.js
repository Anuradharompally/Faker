#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())

<<<<<<< HEAD

console.log(faker.movies.kollywood());



=======
console.log(faker.movies.kollywood())
console.log(faker.groceries.pulses())
console.log(faker.pharmacy.surgical())
>>>>>>> 527855e93d6f6bd074f3bfcb32234d6afae677cb
return;
//console.log(faker.address)
console.log(faker.internet.email())
console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());

faker.locale = "uk";

console.log(faker.helpers.contextualCard());