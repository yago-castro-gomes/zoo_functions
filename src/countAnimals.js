const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(...animal) {
  const salva = {};
  if (animal.length === 0) {
    data.species.forEach((specie) => {
      salva[specie.name] = specie.residents.length;
    });
    return salva;
  }
  const nomeAnimal = animal.map((nome) => nome.specie);
  const sexoAnimal = animal.map((nome) => nome.sex).toString();
  const achaAnimal = species.find((specie) => nomeAnimal.toString() === specie.name);
  if (sexoAnimal === 'male' || sexoAnimal === 'female') {
    const qntdAnimalSex = species.find((specie) => nomeAnimal.toString() === specie.name)
      .residents.filter((sexo) => sexo.sex === sexoAnimal).length;
    return qntdAnimalSex;
  }

  return achaAnimal.residents.length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
