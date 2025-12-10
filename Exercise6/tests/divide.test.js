const request = require("supertest");
const setup = require("./setupCalculatorTest");

describe("DIVIDE operation", () => {
    const app = setup();

    test("should divide two numbers", async () => {
        const res = await request(app).get("/divide?a=20&b=4");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(5);
    });

    test("should return error for division by zero", async () => {
        const res = await request(app).get("/divide?a=10&b=0");
        expect(res.status).toBe(400);
        expect(res.body.error).toBe("Division by zero is not allowed");
    });

    test("should return error when parameters are missing", async () => {
        const res = await request(app).get("/divide?a=10");
        expect(res.status).toBe(400);
    });
});