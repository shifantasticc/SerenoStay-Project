if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
// Import Express
const express = require('express');
const app = express();
// Import Mongoose
const mongoose = require('mongoose');
const path = require('path');
// Import Middlewares
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
// Custom Error handling
const ExpressError = require('./utils/ExpressError.js');
// Session-handling
const session = require('express-session');
const MongoStore = require('connect-mongo');
// Flash Message
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');

// Express-Routers
const listingRouter = require('./routes/listing.js');
const reviewRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');

// const dbUrl = process.env.ATLASDB_URL;
const MONGO_URL = 'mongodb://127.0.0.1:27017/SerenoStay';

main()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

// Session Info will store in Mongo Atlas
// const store = MongoStore.create({
//   mongoUrl: dbUrl,
//   crypto: {
//     secret: process.env.SECRET,
//   },
//   touchAfter: 24 * 3600,
// });

// store.on('error', () => {
//   console.log('ERROR in MONGO SESSION STORE', err);
// });

const sessionOptions = {
  // store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// Basic Route
app.get('/', (req, res) => {
  res.redirect('/listings');
});

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

//  C/P from NPM
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currUser = req.user;
  next();
});

// Testing fake user
// app.get('/demouser', async (req, res) => {
//   let fakeUser = new User({
//     email: 'student@gmail.com',
//     username: 'delta-student',
//   });

//   let registeredUser = await User.register(fakeUser, 'helloworld');
//   res.send(registeredUser);
// });

app.use('/listings', listingRouter);
app.use('/listings/:id/reviews', reviewRouter);
app.use('/', userRouter);

// "*" <= this was giving error, so i replace it with => /.*/
// Custom Error for Route that doesn't exist in this project.
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, 'Page Not Found'));
});

// Error Handling (validation error for price if entered string value)
app.use((err, req, res, next) => {
  let { statusCode = 500, message = 'Something went wrong!' } = err;
  res.status(statusCode).render('error.ejs', { message });
  console.log(statusCode, message);
});

// Local Host
app.listen(8080, () => {
  console.log('Server is listening at port 8080');
});
