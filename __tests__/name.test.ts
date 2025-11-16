import request from "supertest";
import app from "../src/app";   // adjust path as needed

describe("GET /api/name", () => {
  it("returns a name", async () => {
    const res = await request(app).get("/api/name");

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name");
  });
});