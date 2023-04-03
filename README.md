CSCI4177 - Tutorial 7
Author: Liam Osler

Last Modification Date: 31 MAR 2023

Repository URLS:
Main Git Repository: https://git.cs.dal.ca/osler/CCSI4177-Tutorial7

Remote Deployment URLs:
https://good-eel-housecoat.cyclic.app/

Running the Project Locally:
Check that you have Node.js installed on your machine. If not, you can download it from https://nodejs.org/en/download/.
```
node -v
```

Clone the repository:
```
git clone https://git.cs.dal.ca/cparker/csci4177_group19_project.git
Navigate to the csci4177_group19_project directory:
```

Change directory to the project directory:
```
cd CCSI4177-Tutorial7
```

Run the project:
```
npm install && npm start
```
## API endpoints:

### Find Users
#### API Route:
GET: 
/users/find/all 
Gets an array of JSON objects with all the users

GET: 
/users/find/id/:id 
Gets a JSON objects for user with :id if it exists

### Create New User
#### API Route:
POST: 
/users/create 
submit a POST request with a JSON body

Required values:
- Username
- Email Address
- Bio

Format:
```
{
  "username": "John Doe",
  "email": "me@johndoe.com",
  "bio": "I am not a deer"
}
```

### Update User
#### API Route:
PUT: 
/users/update/:id 
submit a PUT request with a JSON body to update user with :id

Required values:
- Username
- Email Address
- Bio

Format:
```
{
  "username": "John Doe",
  "email": "me@johndoe.com",
  "bio": "I am not a deer"
}
```

## Behind the Scenes:
### Database:
Connection:
`app.js`
```javascript
const dbURI = `mongodb+srv://admin:CZGuX3v85p32WIu3@tutorial7.mjcxpho.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set("strictQuery", true);
```

User Model:
`models/user.js`
```javascript
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: String,
  email: String,
  about: String,
}, {timestamps: true});

module.exports = mongoose.model("users", schema)
```

User related queries:
`routes/users.js`
```javascript
var express = require('express');
var router = express.Router();

var Users = require('../models/Users');
console.log(Users);

/* GET
  General users route.
  This route will be called with the /users/ route
  e.g. http://localhost:3000/users
  This route will render the users view.
  This page is the main page for the users section.
*/
router.get('/', function(req, res, next) {
  res.render('users/users', { title: 'Users' });
});

/* GET
  Find users route.
  e.g. http://localhost:3000/users/find
  Retrieves a list of all the users
  This page is the main page for the users section.
*/
router.get('/find', async function(req, res, next) {
  res.render('users/find', { title: 'Users - Find' });
});


/* GET
  Find all users route.
  e.g. http://localhost:3000/users/find
  Retrieves a list of all the users
  This page is the main page for the users section.
*/
router.get('/find/all', async function(req, res, next) {
  await Users.find({})
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});


/* GET
  Find users route.
  e.g. http://localhost:3000/users/find
  Retrieves a list of all the users
  This page is the main page for the users section.
*/
router.get('/find/id/:id', async function(req, res, next) {
  await Users.findOne({
    _id: req.params.id
  })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* GET
  User creation page route.
  This route will be called with the /users/create route
  e.g. http://localhost:3000/users/create
  This route will render the create user view.
  This page is the page for creating a new user.
*/
router.get('/create', function(req, res, next) {
  res.render('users/create', { title: 'Users - Create' });
});

/* POST
  User creation page route.
  This route will be called with the /users/create route
  e.g. http://localhost:3000/users/create
  This route will create a new user
*/
router.post('/create', async function(req, res, next) {
  await Users.create(req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* 
  User update page route.
  This route will be called with the /users/update route
  e.g. http://localhost:3000/users/update
  This route will render the create user view.
  This page is the page for updating information about an existing user.
*/
router.get('/update', function(req, res, next) {
  res.render('users/update', { title: 'Users - Update' });
});

/* 
  User update route.
  This route will be called with the /users/update route
  e.g. http://localhost:3000/users/update
  This route will render the create user view.
  This page is the page for updating information about an existing user.
*/
router.put('/update/id/:id', async function(req, res, next) {
  console.log(req.body)
  await Users.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {
    returnOriginal: false
  }
  )
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });

});


/* 
  User deletion page route.
  This route will be called with the /users/delete route
  e.g. http://localhost:3000/users/delete
  This route will render the create user view.
  This page is the page for updating information about an existing user.
*/
router.get('/delete', function(req, res, next) {
  res.render('users/delete', { title: 'Users - Delete' });
});

/* 
  This route will be called with the /users/delete/id/:id route
  e.g. http://localhost:3000/users/delete/id/5e9b9b9b9b9b9b9b9b9b9b9b
  This route will delete a user  
*/
router.get('/delete/id/:id', async function(req, res, next) {
  await Users.deleteOne({
    _id: req.params.id
  })
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});


module.exports = router;

```
