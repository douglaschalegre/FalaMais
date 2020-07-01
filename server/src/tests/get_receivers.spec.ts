import request from 'supertest';
import app from '../app';


describe("Test the receivers path", () => {
  test("Should response the existing receivers", async (done) => {
    const response = await request(app).get("/receivers");
    expect(response.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      origin: expect.any(String)
    });
    done();
  });
});