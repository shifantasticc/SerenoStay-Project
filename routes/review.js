const express = require('express');
// using merge params bcoz parent :id doesn't go to routes it stays in app.js
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require('../middleware.js');

const reviewController = require('../controllers/reviews.js');

// Reviews
// Post Reviews Route
router.post(
  '/',
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete Reviews Route
router.delete(
  '/:reviewId',
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
