const User = require('../models/user.js');
const Listing = require('../models/listing.js');

module.exports.renderSignupForm = (req, res) => {
  res.render('users/signup.ejs');
};

module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', 'Welcome to SerenoStay!');
      res.redirect('/listings');
    });
  } catch (e) {
    req.flash('error', e.message);
    res.redirect('/signup');
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render('users/login.ejs');
};

module.exports.login = async (req, res) => {
  req.flash('success', 'Welcome back to SerenoStay!');
  let redirectUrl = res.locals.redirectUrl || '/listings';
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'you are logged out!');
    res.redirect('/listings');
  });
};

// Search Listings
module.exports.searchListings = async (req, res) => {
  try {
    const { search } = req.query;
    const query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } },
        { country: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
      ];
    }
    const listings = await Listing.find(query);
    res.render('listings/index.ejs', { allListings: listings }); // or send JSON if using frontend JS
  } catch (error) {
    console.error('Search failed:', error);
    res.status(500).send('Search failed: ' + error.message);
  }
};

// Filter Listings
module.exports.filterListings = async (req, res) => {
  const category = req.query.category;

  try {
    const listings = await Listing.find({
      category: { $regex: category, $options: 'i' }, // case-insensitive
    });

    res.render('listings/index.ejs', { allListings: listings }); // pass to EJS
  } catch (e) {
    res.status(500).send('Server error while filtering listings.');
  }
};
