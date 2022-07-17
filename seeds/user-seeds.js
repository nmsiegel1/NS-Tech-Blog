const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    id: 1,
    username: "Adam",
    email: "adam@email.com",
  },
  {
    id: 3,
    username: "sadie",
    email: "sadie@email.com",
  },
  {
    id: 4,
    username: "wesley",
    email: "wesley@email.com",
  },
  {
    id: 5,
    username: "Nina",
    email: "nina@email.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
