import request from 'supertest';
import app from '../app';


describe("Test the origin path", () => {
  test("Should response the existing origins", async (done) => {
    const response = await request(app).get("/origins");
    expect(response.status).toBe(200);
    expect.objectContaining({
      id: expect.any(Number),
      origin: expect.any(String)
    });
    done();
  });
});