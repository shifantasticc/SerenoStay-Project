const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');

// SignUp Route
router
  .route('/signup')
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

// Login Route
// passport.authenticate() => authenticates user details
router
  .route('/login')
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true,
    }),
    userController.login,
  );

// Logout Route
router.get('/logout', userController.logout);

//  Search Route
router.get('/search', userController.searchListings);

// Filter Route
router.get('/filter', userController.filterListings);

module.exports = router;
