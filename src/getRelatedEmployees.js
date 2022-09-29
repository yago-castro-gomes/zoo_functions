const data = require('../data/zoo_data');

function isManager(id) {
  const employeManager = data.employees.some(({ managers }) => managers.includes(id));

  return employeManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colab = data.employees.filter(({ managers }) => managers.includes(managerId))
    .map((worker) => `${worker.firstName} ${worker.lastName}`);

  return colab;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
