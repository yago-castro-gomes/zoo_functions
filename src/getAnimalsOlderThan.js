const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const allAnimals = data.species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
  return allAnimals;
}

module.exports = getAnimalsOlderThan;
