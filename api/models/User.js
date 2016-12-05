/**
* @Author: mars
* @Date:   2016-12-05T17:38:51-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T18:02:56-05:00
*/

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {
      type: 'string'
    },

    username : {
      type: 'string'
    },

    meta : {
      type: 'json'
    },

    // relationships
    dailyJokes: {
      collection: 'dailyJoke',
      via: 'user'
    }
  }
};
