const request = require("supertest");
const app = require("../app");

describe("SUBTRACT operation", () => {
    

    test("should subtract two numbers", async () => {
        const res = await request(app).get("/calculator/subtract?a=10&b=4");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(6);
    });

  });