/**
* @Author: mars
* @Date:   2016-12-05T17:32:45-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T19:16:09-05:00
*/

'use strict';

/**
 * DailyJokeController
 *
 * @description :: Server-side logic for managing dailyjokes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	index(req, res) {
		let ok = true,
				title = 'Jokes!',
				message = 'You have reached the daily jokes access gateway';
		res.send(200, { ok, title, message });
	},
	/**
	 * GET <host>/dailyJoke/user?id=123
	 * - fetch joke
	 * - add it to list of user's jokes
	 * - update db
	 * - send joke to user
	 * @param req.query.id string id of the user who request the joke
	 */
	user(req, res) {
		let ok = true;
		let userId = req.query.id;
		DailyJokeService.getRandom()
		.then(jokeObject => {
			let content = jokeObject.content, author = jokeObject.author, source = jokeObject.source;
			return DatabaseAccessService.dailyJokeSaveByUserId(userId, { content, author, source });
		})
		.then(jokeObject => {
			return res.send(200, { ok, joke: jokeObject.content, from: jokeObject.author });
		})
		.catch(e => res.send(500, { ok: false, message: (e.message || 'unknown error') }));
	}
};
