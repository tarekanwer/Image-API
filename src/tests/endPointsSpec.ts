import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get(
      '/api/images?width=500&height=500&filename=fjord.jpg'
    );
    expect(response.status).toBe(200);
    done();
  });
  it('should return response 400 for missing width', async (done) => {
    const response = await request.get(
      '/api/images?height=500&filename=fjord.jpg'
    );
    expect(response.status).toBe(400);
    done();
  });

  it('should return response 400 for missing height', async (done) => {
    const response = await request.get(
      '/api/images?width=500&filename=fjord.jpg'
    );
    expect(response.status).toBe(400);
    done();
  });

  it('should return response 400 for unknown files', async (done) => {
    const response = await request.get(
      '/api/images?width=500&height=500&filename=unknown.jpg'
    );
    expect(response.status).toBe(400);
    done();
  });
  it('should return response 400 for negative width', async (done) => {
    const response = await request.get(
      '/api/images?width=-1&height=500&filename=fjord.jpg'
    );
    expect(response.status).toBe(400);
    done()
  });
  it('should return response 400 for negative height', async (done) => {
    const response = await request.get(
      '/api/images?width=500&height=-1&filename=fjord.jpg'
    );
    expect(response.status).toBe(400);
    done();
  });
});
