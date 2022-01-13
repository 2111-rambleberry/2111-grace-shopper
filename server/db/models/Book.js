const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  series: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  language: {
    type: Sequelize.STRING,
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [10, 13],
    },
  },
  genres: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  bookFormat: {
    type: Sequelize.STRING,
  },
  pages: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
  publisher: {
    type: Sequelize.STRING,
  },
  coverImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 500,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = Book;