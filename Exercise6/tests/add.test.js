const request = require("supertest");
const app = require("../app");

describe("ADD operation", () => {
   

    test("should add two numbers", async () => {
        const res = await request(app).get("/calculator/add?a=5&b=3"); // ?a=5 -> first query parameter (a=5) / b=3 -> second query paramenter b=3
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(8);
    });

   
});