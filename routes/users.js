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
router.get('/find', function(req, res, next) {
  
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
router.post('/create', function(req, res, next) {
  let newUserContent = req.body;
  var test = Model.findOne({_id:newUserContent.username}, function (err, docs) {
    if(err)  console.error(err);
    if(docs) res.send(docs);
  });
  res.send("hello");
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
  User deletion page route.
  This route will be called with the /users/delete route
  e.g. http://localhost:3000/users/delete
  This route will render the create user view.
  This page is the page for updating information about an existing user.
*/
router.get('/delete', function(req, res, next) {
  res.render('users/delete', { title: 'Users - Delete' });
});

module.exports = router;
