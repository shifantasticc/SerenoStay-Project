const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

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

const initDB = async () => {
  await Listing.deleteMany({});
  // To add data in every entry in db at once!
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: '683352296d28de194e0ef9f3',
  }));
  await Listing.insertMany(initData.data);
  console.log('data was initialized');
};

initDB();
