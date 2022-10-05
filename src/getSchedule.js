const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const dayWeek = Object.keys(hours);

const func = () => {
  const craeteObj = dayWeek.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(curr))
        .map((spi) => spi.name),
    };
    return acc;
  }, {});
  craeteObj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return craeteObj;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return func();
  }
  const who = species.some((specie) => specie.name === scheduleTarget);
  if (!who && !dayWeek.includes(scheduleTarget)) {
    return func();
  }
  if (dayWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: func()[scheduleTarget] };
  }
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
