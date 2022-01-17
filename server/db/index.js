//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Cart = require("./models/Cart");
const Book = require("./models/Book");
//associations could go here!

User.hasMany(Cart);
Cart.belongsTo(User);
Book.belongsToMany(Cart);
Cart.hasMany(Book);

module.exports = {
  db,
  models: {
    User,
    Cart,
    Book,
  },
};
