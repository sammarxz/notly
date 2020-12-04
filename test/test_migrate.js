const mongoose = require('mongoose');

const User = require('../app/models/user');
const Note = require('../app/models/notes');

async function createFakeUsers() {
  const u = new User({
    name: 'Fake',
    email: 'fake@fake.com',
    password: 'fake'
  });

  await u.save();
}

async function createFakeNotes() {
  const u = await User.findOne({ email: 'fake@fake.com' });
  const author = u._id;

  const note = new Note({ title: 'Test edit this note', body: 'Edit this', author });
  
  await note.save();

  const noteToDelete = new Note({ title: 'Test delete this note', body: 'bye', author });

  await noteToDelete.save();
}

mongoose.connect(process.env.MONGO_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log('MongoDB connection established successfully with test');
  await mongoose.connection.db.dropDatabase();
  await createFakeUsers();
  await createFakeNotes();
  await mongoose.connection.close();
  process.exit();
});
