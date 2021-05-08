'use strict';
// const {  Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    'Students',
  {
    fullName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    
  }, 

);

Students.associate = function (models) {
  Students.belongsTo(models.Groupp, {
    foreignKey: {
      field: 'grouppId',
    },
    as: 'students',
  });
};

  return Students;
};