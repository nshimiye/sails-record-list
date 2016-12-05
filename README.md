# sails-record-list
Add new record to a list using sailsjs built-in query language

# Scenario
User wants to receive one joke everyday.

# Step by step

* create a sails app
```
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
```
```

* Add logic to save a joke in db
```
```
