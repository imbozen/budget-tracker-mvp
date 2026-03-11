const request = require('supertest');
const app = require('../src/app');

describe('Expense API', () => {
  
  test('GET / should return HTML page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<html>');
  });
  
  test('GET /api/expenses/total should return a total object', async () => {
    const res = await request(app).get('/api/expenses/total');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('total');
  });

  test('GET /health should return status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });

});