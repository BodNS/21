'use strict';
/* const {
  Model
} = require('sequelize'); */
module.exports = (sequelize, DataTypes) => {
  const Groupp = sequelize.define(
    'Groupp',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Groupp.associate = function (models) {
    Groupp.hasMany(models.Students, {
      foreignKey: {
        field: 'grouppId',
      },
      as: 'Groupp',
    });
  };


  return Groupp;
};