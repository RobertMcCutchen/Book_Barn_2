'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};