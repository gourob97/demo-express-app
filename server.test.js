const request = require("supertest");
const app = require("./server");  // Assuming your server.js exports the app

describe("GET /", () => {
  it("should return a hello world message", async () => {
    const response = await request(app).get("/");  // Make GET request to the root
    expect(response.status).toBe(200);  // Check for status code 200
    expect(response.text).toBe("Hello, World! This is a demo Express server.");  // Check the response message
  });
});
