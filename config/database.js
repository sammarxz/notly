const mongoose = require('mongoose');

require('dotenv').config();

const mongoUrl = process.env.MONGO_DATABASE_URL;

mongoose.Promise = global.Promise;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log('MongoDB connection established successfully'))
  .catch((err) => console.log(`Error: ${err}`))



