const request = require('supertest');
const app = require('../src/server');

describe('Expense API', () => {

  test('GET /api/expenses should return 200', async () => {
    const res = await request(app).get('/api/expenses');

    expect(res.statusCode).toBe(200);
  });

});

test('basic test', () => {
  expect(1 + 1).toBe(2);
});