const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const getId = data.species.filter(({ id }) => ids.includes(id));

  return getId;
}

module.exports = getSpeciesByIds;
