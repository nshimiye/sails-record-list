/**
* @Author: mars
* @Date:   2016-12-05T17:35:44-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T18:03:47-05:00
*/

/**
 * DailyJoke.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {

    content : {
      type: 'string'
    },
    author : {
      type: 'string'
    },
    source : {
      type: 'string'
    },

    meta : {
      type: 'json'
    },

    // relationships
    user: {
      model: 'user'
    },
  }
};
