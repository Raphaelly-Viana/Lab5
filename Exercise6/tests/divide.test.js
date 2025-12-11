const request = require("supertest");
const app = require("../app");

describe("DIVIDE operation", () => {
    

    test("should divide two numbers", async () => {
        const res = await request(app).get("/calculator/divide?a=20&b=4");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(5);
    });

 
});