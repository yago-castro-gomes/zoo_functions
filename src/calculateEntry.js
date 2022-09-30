const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const kids = entrants.filter((criança) => criança.age < 18).length;
  const adults = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const olds = entrants.filter((old) => old.age >= 50).length;
  return {
    child: kids,
    adult: adults,
    senior: olds,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const func = countEntrants(entrants);
  const kidsPrice = func.child * 20.99;
  const adultPrice = func.adult * 49.99;
  const seniorPrice = func.senior * 24.99;
  return kidsPrice + adultPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
