var express = require('express');
var router = express.Router();

var Users = require('../models/Users');

/* GET
  General users route.
  This route will be called with the /users/ route
  This route will render the users view.
  This page is the main page for the users section.
*/
router.get('/', function(req, res, next) {
  res.render('users/users', { title: 'Users' });
});


/* GET
  Find all users route.
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
  This route will render the create user view.
  This page is the page for creating a new user.
*/
router.get('/create', function(req, res, next) {
  res.render('users/create', { title: 'Users - Create' });
});

/* POST
  User creation page route.
  This route will be called with the /users/create route
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
  This route will render the create user view.
  This page is the page for updating information about an existing user.
*/
router.get('/update', function(req, res, next) {
  res.render('users/update', { title: 'Users - Update' });
});

/* 
  User update route.
  This route will be called with the /users/update route
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
