const request = require("supertest");
const app = require("../app");

describe("MULTIPLY operation", () => {
   
    test("should multiply two numbers", async () => {
        const res = await request(app).get("/calculator/multiply?a=3&b=5");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(15);
    });

});