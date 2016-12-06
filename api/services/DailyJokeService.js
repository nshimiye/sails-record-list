/**
* @Author: mars
* @Date:   2016-12-05T18:42:27-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-05T18:55:09-05:00
*/
'use strict';
// var JokeApi = require('joke-api');

// api/services/DailyJokeService.js
module.exports = {
  getRandom() {
    return new Promise(resolve => {
      let content = 'I joke a lot :)', author = 'Comedian', source = 'http://jokes.com';
      resolve({ content, author, source });
    });
  }
};
