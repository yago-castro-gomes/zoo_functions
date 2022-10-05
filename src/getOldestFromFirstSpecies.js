const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieEmploy = employees.find((employ) => employ.id === id).responsibleFor[0];
  const specieAnimal = species.find((specie) => specie.id === specieEmploy).residents;
  const old = specieAnimal.reduce((acc, curr) => {
    if (acc.age > curr.age) {
      return acc;
    }
    return curr;
  }, []);
  const arrayOld = Object.values(old);

  return arrayOld;
}

module.exports = getOldestFromFirstSpecies;
