const request = require('supertest');
const app = require('./index');

describe('API Endpoints', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Welcome to the API');
  });

  test('GET /user should return user data', async () => {
    const response = await request(app).get('/user');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
  });

  test('GET /products should return product list', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
}); 