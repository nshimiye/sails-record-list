/**
* @Author: mars
* @Date:   2016-12-05T17:01:16-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T20:04:46-05:00
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
		// return DatabaseAccessService.user
		res.send(200, { ok, query: req.query });
	},

	/**
	 * GET <host>/user/:userId/dailyJoke
	 * fetch all jokes for this user
	 * @param req.params.id string id of the user who request the joke
	 */
	dailyJoke(req, res) {
		let ok = true;
		sails.log.debug('dailyJoke', req.params, typeof req.params, Object.keys(req.params) );

		let userId = req.params.id;
		DailyJokeService.getRandom()
		.then(jokeObject => {
			let content = jokeObject.content, author = jokeObject.author, source = jokeObject.source;
			return DatabaseAccessService.userSaveJoke(userId, { content, author, source });
		})
		.then(jokeObject => {
			return res.send(200, { ok, joke: jokeObject.content, from: jokeObject.author });
		})
		.catch(e => res.send(500, { ok: false, message: (e.message || 'unknown error') }));
	}

};
