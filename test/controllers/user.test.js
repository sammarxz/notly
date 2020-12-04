const request = require('supertest');
const mongoose = require('mongoose');

let app;

describe('User model Endpoints', () => {
  beforeAll(() => {
    app = require('../../app');
  });

  afterAll(async () => {
    await app.close();
    await mongoose.connection.close();
  });

  it('should try to create user with valid credentials and success', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({ name: 'Fake', email: 'faake@fake.com', password: '1234' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name');
  });

  it('should try to create user that already exists and fail', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({ name: 'Fake', email: 'faake@fake.com', password: '1234' });

    expect(res.statusCode).toEqual(500);
  });

  it('should try to do login with invalid credentials and fail', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'fakefail@fake.com', password: 'fake' })
        
    expect(res.statusCode).toEqual(401)
  });

  it('should try to do login with valid credentials and success', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'faake@fake.com', password: '1234' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
