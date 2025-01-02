import request from "supertest";
import app from "../../index";
import { User } from "../../types/response";

describe("GET /api/users", () => {
  it("should return a UserList", async () => {
    console.log("Starting test for GET /api/users");

    // Make a request to the endpoint
    const response = await request(app).get("/api/users");

    console.log("Received response for GET /api/users");

    // Verify the response
    expect(response.status).toBe(200);
    const userListProperties = ["message", "data"];
    userListProperties.forEach((property) => {
      expect(response.body).toHaveProperty(property);
    });

    expect(response.body.data).toBeInstanceOf(Array);

    const userProperties = ["id", "email", "username"];
    response.body.data.forEach((user: User) => {
      userProperties.forEach((property) => {
        expect(user).toHaveProperty(property);
      });
    });
  });
});
