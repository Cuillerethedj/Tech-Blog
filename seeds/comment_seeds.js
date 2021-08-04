const { Comments } = require('../models');

const commentData = [{
    text: "Lorem ipsum dolor sit amet",
    user_id: 1,
    post_id: 1,
    date_created:'March 30, 2018'
    },

    {
    text: "consectetur adipiscing elit",
    user_id: 2,
    post_id: 2,
    date_created:'May 05, 2017',
    },
    {
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    user_id: 3,
    post_id: 3,
    date_created:'June 10, 2019',
    },
    {
    text: "consectetur adipiscing elit",
    user_id: 4,
    post_id: 4,
    date_created:'July 4, 2020',
    },
    {
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    user_id: 5,
    post_id: 5,
    date_created:'August 14, 2016',
    },
    {
    text: "consectetur adipiscing elit",
    user_id: 6,
    post_id: 6,
    date_created:'October 15, 2018',
    },
    {
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    user_id: 7,
    post_id: 7,
    date_created:'November 3, 2016',
    },
    {
    text: "consectetur adipiscing elit",
    user_id: 8,
    post_id: 8,
    date_created:'December 24, 2020',
    },
    {
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    user_id: 9,
    post_id: 9,
    date_created:'January 20, 2018',
    }
    ];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;