'use strict';

function generate_students(groupp) {
  console.log(groupp);
  const students = [];
  for (let i = 0; i < groupp.length; i++) {
    const x = Math.round(Math.random() * 10);
    for (let j = 0; j < x; j++) {
      students.push({
      grouppId: groupp[i].id,
      fullName: `fullName${i}${j}`,
        age: Math.floor(Math.random()*100),
        email: `email${i}${j}@gmail${Math.floor(Math.random()*100)}.com${Math.floor(Math.random()*100)}`,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
  }
}
  return students;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('SELECT id FROM "Groupp"')
      .then(([results, metadata]) => {
        return queryInterface.bulkInsert('Students', generate_students(results), {});
      });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  },
};
