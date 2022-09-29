const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const colaborador = data.employees.find((employ) =>
    employeeName === employ.firstName || employeeName === employ.lastName);
  if (!employeeName) {
    return {};
  }
  return colaborador;
}

module.exports = getEmployeeByName;
