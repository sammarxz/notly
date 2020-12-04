const request = require('supertest');
const mongoose = require('mongoose');

const Note = require('../../app/models/notes');

let app;
let note;

describe('Notes model Endpoints', () => {
  let token;

  beforeAll(async () => {
    app = require('../../app');
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'fake@fake.com', password: 'fake'  });
    token = res.body.token;
    note = await  Note.findOne({ title: 'Test edit this note' });
  });
    
  afterAll(async () => {
    await app.close();
    await mongoose.connection.close();
  });

  it('should try to get all notes without authorization and fail', async () => {
    const res = await request(app)
      .get('/notes');

    expect(res.statusCode).toEqual(401);
  });

  it('should try to get all notes and success', async () => {
    const res = await request(app)
      .get('/notes')
      .set('x-access-token', token);

    expect(res.statusCode).toEqual(200);
  });

  it('should try create a note without authorization and fail', async () => {
    const res = await request(app)
      .post('/notes')
      .send({ title: 'Note title', body: 'Note body'});

    expect(res.statusCode).toEqual(401);
  });

  it('should try create a note and success', async () => {
    const res = await request(app)
      .post('/notes')
      .set('x-access-token', token)
      .send({ title: 'Note title', body: 'Note body'});

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('author');
  });

  it('should try update a note and success', async () => {
    const res = await request(app)
      .put(`/notes/${note._id}`)
      .set('x-access-token', token)
      .send({ title: 'Edited', body: 'Edited too'});

      expect(res.statusCode).toEqual(200);
      expect(res.body.title).toEqual('Edited');
  });

  it('should try delete a note and success', async () => {
    const res = await request(app)
      .delete(`/notes/${note._id}`)
      .set('x-access-token', token)

      expect(res.statusCode).toEqual(204);
  });

  it('should try to search a note and success', async () => {
    const res = await request(app)
      .get('/notes/search?query=Note')
      .set('x-access-token', token);

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });
});
