const { Post } = require("../models");

const postData = [
  {
    id: 11,
    title: "Don't stress...sequelize",
    post_text:
      "Tired of writing raw SQL? Use sequelize to streamline accessing your database. ",
    created_at: "2022-07-16T18:08:06.000Z",
    user: {
      username: "wesley",
    },
  },
  {
    id: 10,
    title: "Don't forget to protect your users data...",
    post_text: "Use bcrypt to hash and protect data for all of your projects.",
    created_at: "2022-07-16T18:05:48.000Z",
    user: {
      username: "sadie",
    },
  },
  {
    id: 9,
    title: "Automatically restart Node.js apps with Nodemon",
    post_text: "So you don't have to restart your server nonstop",
    created_at: "2022-07-16T18:03:20.000Z",
    user: {
      username: "Adam",
    },
  },
  {
    id: 8,
    title: "Handlebars is a lifesaver!!",
    post_text: "It saves you so much time",
    created_at: "2022-07-16T18:01:18.000Z",
    user: {
      username: "Nina",
    },
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
