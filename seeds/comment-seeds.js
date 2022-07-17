const { Comment } = require("../models");

const commentData = [
  {
    id: 4,
    comment_text: "I agree!",
    user_id: 1,
    post_id: 8,
    createdAt: "2022-07-16T18:03:30.000Z",
    updatedAt: "2022-07-16T18:03:30.000Z",
  },
  {
    id: 5,
    comment_text: "So helpful!",
    user_id: 3,
    post_id: 9,
    createdAt: "2022-07-16T18:06:03.000Z",
    updatedAt: "2022-07-16T18:06:03.000Z",
  },
  {
    id: 6,
    comment_text: "Thanks for the reminder",
    user_id: 4,
    post_id: 10,
    createdAt: "2022-07-16T18:08:21.000Z",
    updatedAt: "2022-07-16T18:08:21.000Z",
  },
  {
    id: 7,
    comment_text: "Love using handlebars",
    user_id: 4,
    post_id: 8,
    createdAt: "2022-07-16T18:13:00.000Z",
    updatedAt: "2022-07-16T18:13:00.000Z",
  },
  {
    id: 8,
    comment_text: "I gotta try that!",
    user_id: 5,
    post_id: 11,
    createdAt: "2022-07-16T18:13:49.000Z",
    updatedAt: "2022-07-16T18:13:49.000Z",
  },
  {
    id: 9,
    comment_text: "I'll check it out",
    user_id: 3,
    post_id: 8,
    createdAt: "2022-07-16T18:27:13.000Z",
    updatedAt: "2022-07-16T18:27:13.000Z",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
