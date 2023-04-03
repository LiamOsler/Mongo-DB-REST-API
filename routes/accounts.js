var express = require('express');
var router = express.Router();

/* GET
  General customers route.
  This route will be called with the /users/ route
  e.g. http://localhost:3000/users
  This route will render the users view.
  This page is the main page for the users section.
*/
router.get('/', function(req, res, next) {
  res.render('error', { title: 'Accounts - Error', message: 'This page is not yet implemented.', error: {status: 404, stack: 'Not yet implemented.'} });
});


module.exports = router;
