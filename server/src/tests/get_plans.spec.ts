import request from 'supertest';
import app from '../app';

describe("Test the plans path", () => {
  test("It should response the GET method", async (done) => {
    const response = await request(app).get("/plans");
    expect(response.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      free_minutes: expect.any(Number),
      fee: expect.any(Number)
    });
    done();
  });
});