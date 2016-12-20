<!--
@Author: mars
@Date:   2016-12-05T17:00:57-05:00
@Last modified by:   mars
@Last modified time: 2016-12-05T20:34:47-05:00
-->
# sails-record-list
Add new record to a list using sailsjs built-in query language

# Scenario
User wants to receive one joke everyday.

# End goal
Create a log of jokes owned by a specific user
```
foundUser.dailyJokes.add(jokeData);
```

# Step by step

* create a sails app
```
sails new sails-record-list
```

* create a user api
```
sails generate api user
rm -rf api/models/User.js
sails generate model user name:string username:string meta:json
```

* generate a dailyJoke api
```
sails generate api dailyJoke
rm -rf api/models/DailyJoke.js
sails generate model dailyJoke content:string author:string source:string meta:json
```

* Add logic to fetch one joke for a given user
```javascript
// api/Controllers/DailyJokeController.js

```

* Add logic to save a joke in db
```javascript
// [api/Controllers/UserController.js]()

...
return DatabaseAccessService.userSaveJoke(userId, { content, author, source });
...

```
[link to complete function](https://github.com/nshimiye/sails-record-list/blob/master/api/controllers/UserController.js#L37)
```javascript
// api/services/DatabaseAccessPrivateUser.js

...
User.findOne({ id }).populate('dailyJokes')
...
foundUser.dailyJokes.add(jokeData);
return this.updateUser(foundUser)
...

```
[link to complete function](https://github.com/nshimiye/sails-record-list/blob/master/api/services/DatabaseAccessPrivateUser.js#L17) |
[link updateUser function](https://github.com/nshimiye/sails-record-list/blob/master/api/services/DatabaseAccessPrivateUser.js#L34)

* update a new route to service the dailyJoke request
```javascript
// config/routes.js
  'GET /user/:id/dailyJoke': {
    controller: 'UserController',
    action: 'dailyJoke'
  }
```

* create a dummy user
```sh
# GET request
curl http://localhost:1337/user/create?name=mars&username=mars@fusemachines.com
```

* request a joke
```sh
curl http://localhost:1337/user/1/dailyJoke
```

Now the joke data will be added to the user's joke list!
