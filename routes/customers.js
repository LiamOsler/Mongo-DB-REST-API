var express = require('express');
var router = express.Router();

var Customers = require('../models/Customers');

/* GET
  General customers route.
  This route will be called with the /customers/ route
  This route will render the customers view.
  This page is the main page for the customers section.
*/
router.get('/', function(req, res, next) {
    res.render('customers/customers', { title: 'Customers' });
});

/* GET
  Find customers route.
  Retrieves a list of all the users
  This page is the main page for the users section.
*/
router.get('/find', async function(req, res, next) {
  res.render('customers/find', { title: 'Users' });
});


/* GET
  Find all users route.
  e.g. http://localhost:3000/users/find
  Retrieves a list of all the users
  This page is the main page for the users section.
*/
router.get('/find/all', async function(req, res, next) {
  await Customers.find({})
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* GET
  Find customers route.
  Retrieves a customer by unique _id
  This page is the main page for the users section.
*/
router.get('/find/id/:id', async function(req, res, next) {
  await Customers.findOne({
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
  Customers creation page route.
  This route will be called with the /customers/create route
  This route will render the customer creation view.
*/
router.get('/create', function(req, res, next) {
    res.render('customers/create', { title: 'Users' });
});

/* POST
  Customer creation page route.
  This route will be called with the /users/create route
  This route will create a new user
*/
router.post('/create', async function(req, res, next) {
  await Customers.create(req.body)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});


/* GET
  General customers update route.
  This route will be called with the /customers/update route
  This route will render the customer update view.
*/
router.get('/update', function(req, res, next) {
  res.render('customers/update', { title: 'Users' });
});


/* GET
  General customers deletion route.
  This route will be called with the /customers/create route
  This route will render the customer deletion view.
*/
router.get('/delete', function(req, res, next) {
  res.render('customers/delete', { title: 'Users' });
});




module.exports = router;
