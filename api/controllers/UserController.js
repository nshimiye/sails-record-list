/**
* @Author: mars
* @Date:   2016-12-05T17:01:16-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T18:22:27-05:00
*/
'use strict';
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 */
module.exports = {
	index(req, res) {
		let ok = true,
				title = 'Jokes!',
				message = 'You have reached the user access gateway';
		res.send(200, { ok, title, message });
	},
	/**
	 * GET <host>/user/:userId/dailyJokes
	 * fetch all jokes for this user
	 * @param req.query.id string id of the user who request the joke
	 */
	dailyJokes(req, res) {
		let ok = true;
		// @TODO
		res.send(200, { ok, query: req.query });
	}
};
