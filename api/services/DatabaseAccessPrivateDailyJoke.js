/**
* @Author: mars
* @Date:   2016-12-05T18:46:22-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T19:11:07-05:00
*/
'use strict';

// api/services/DatabaseAccessPVdailyJokeService.js
exports.main = {
  /**
   * @param userId string
   * @param jokeData { content: string, author: string, source: string }
   */
  dailyJokeSaveByUserId(userId, jokeData) {
    return new Promise(resolve => {
      sails.log.warn(userId, jokeData);
      resolve(jokeData);
    });
  }
};
