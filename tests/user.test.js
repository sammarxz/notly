const request = require('supertest');
const ApiUrl = "http://localhost:3000";

describe("POST /users/login", () => {
  it("should return 200 and logged user name", () => {
    return request(ApiUrl)
      .post("/users/login")
      .send({ email: "sammarxz@protonmail.com", password: "1234" })
      .query({ name: "Samuel Marques" })
      .expect(200)
  });
});

describe("POST /users/register", () => {
  it("should return 200 and the created user name", () => {
    return request(ApiUrl)
      .post("/users/register")
      .send({ name: "Ana Julia", email: "ansaaaasd@gmail.com", password: "1234" })
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({ name: "Ana Julia" })
      })
  });
});
