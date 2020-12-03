const mongoose = require('mongoose');

const User = require('../app/models/user')

async function createFakeUsers () {
  const uf = new User({
    name: 'Fake Delete',
    email: 'fakedelete@fake.com',
    password: 'fake'
  });

  await uf.save();
}

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log('MongoDB connection established successfully with test');
  await mongoose.connection.db.dropDatabase();
  await createFakeUsers();
  await mongoose.connection.close();
  process.exit();
});
