'use strict';

function generate_groupp_seed() {
  const groupp = [];
  for (let i = 0; i < 20; i++) {
    groupp.push({
      name: `Groupp${i}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return groupp;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groupp', generate_groupp_seed(), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groupp', null, {});
  }
};
