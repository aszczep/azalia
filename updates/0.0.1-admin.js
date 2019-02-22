var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: 'aszczepanik2@gmail.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);

};