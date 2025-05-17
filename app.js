const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
// Custom Error handling
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema } = require('./schema.js');

// Connecting DataBase
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
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
// Basic Route
app.get('/', (req, res) => {
  res.send('Hi I am root');
});

// Validation Schema (middleware)
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(',');
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Home/Index Route
app.get(
  '/listings',
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render('listings/index.ejs', { allListings });
  }),
);

// New Route
app.get('/listings/new', (req, res) => {
  res.render('listings/new.ejs');
});

// Read/Show Route (below new route becoz of route(:id) issue)
app.get(
  '/listings/:id',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/show.ejs', { listing });
  }),
);

// Create Route
app.post(
  '/listings',
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect('/listings');
    }),
);

// Edit Route
app.get(
  '/listings/:id/edit',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit.ejs', { listing });
  }),
);

// Update Route
app.put(
  '/listings/:id',
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }),
);

// Destroy Route
app.delete(
  '/listings/:id',
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect(`/listings`);
  }),
);

// // Test Listing
// app.get('/testListing', async (req, res) => {
//   let sampleListing = new Listing({
//     title: 'My new Villa',
//     description: 'By the beach',
//     price: 1500,
//     location: 'Juhu, Mumbai',
//     country: 'India',
//   });

//   await sampleListing.save();
//   console.log('sample was saved');
//   res.send('successful testing');
// });

// "*" <= this was giving error, so i replace it => /.*/
// Custom Error for Route that doesn't exist in this project.
app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, 'Page Not Found'));
});

// Error Handling (validation error for price if entered string value)
app.use((err, req, res, next) => {
  let { statusCode = 500, message = 'Something went wrong!' } = err;
  res.status(statusCode).render('error.ejs', { message });
  console.log(statusCode, message);
  // res.status(statusCode).send(message);
});

// Local Host
app.listen(8080, () => {
  console.log('Server is listening at port 8080');
});
