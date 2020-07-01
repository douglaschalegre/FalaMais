import request from 'supertest';
import app from '../app';


describe("Test the fee path", () => {
  test("It should response the GET method", async (done) => {
    const response = await request(app).get("/fees");
    expect(response.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      origin: expect.any(String),
      receiver: expect.any(String),
      fee_per_minute: expect.any(Number)
    });
    done();
  });
});