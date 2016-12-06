/**
* @Author: mars
* @Date:   2016-12-05T18:46:22-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T19:52:02-05:00
*/
'use strict';

// api/services/DatabaseAccessPVdailyJokeService.js
exports.main = {
  /**
   * @param userId string
   * @param jokeData { content: string, author: string, source: string }
   */
  dailyJokeSaveByUserId(userId, jokeData) {
    // @TODO validate jokeData

    return UtilityService.runDBQuery(
      User.findOne({ id: userId })
    )
    .then(res => {
      let inputObject = Object.assign({}, jokeData, { user: res.id } );
      return this.saveJoke(inputObject);
    })
    .then(joke => {
      sails.log.debug('dailyJokeSaveByUserId', joke);
      return joke; // => { user, content, author, source }
    });
  },
  /**
   * @param jokeData { user, content, author, source }
   */
  saveJoke(jokeData) {

  return UtilityService.runDBQuery(
    DailyJoke.create(jokeData)
  )
  .then(res => {
    // @fin the create object
    return res;
  });
  }
};
