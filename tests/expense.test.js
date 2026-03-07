const request = require('supertest');
const app = require('../src/app');

describe('Expense API', () => {
  test('GET / should return running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});