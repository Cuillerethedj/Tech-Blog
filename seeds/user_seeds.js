
const { User } = require('../models');

const userData = [{
        username: 'Johnloves',
        password: 'jkohn123',
				email: 'john@example.com'

    },
    {
        username: 'JaketheSnake',
        password: 'youktheknow123!',
				email: 'jaketheSnake@test.com',
    },
    {
        username: 'JoeDirt',
        password: 'jdirts4327',
				email: 'JoeDirt@test.com'
    },
		{
			username: 'MikeSharp',
			password: 'youksddd1!',
			email: 'MikeS@test.com',
	},
	{
			username: 'Bchaney',
			password: 'bc3429784327',
			email: 'BcHaney@test.com'
	},
	{
		username: 'LisaW',
		password: 'pytr123!',
		email: 'lw@test.com',
},
{
		username: 'DebG',
		password: 'r6db4327',
		email: 'DAG@test.com'
},
{
	username: 'Ricky B',
	password: 'notnow67489!',
	email: 'coolRick@test.com',
},
{
	username: 'MisterT',
	password: 'dowha83',
	email: 'youdontknow@test.com'
},
{
	username: 'Rocky C',
	password: 'kjehiow231',
	email: 'Rocky4@test.com'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;