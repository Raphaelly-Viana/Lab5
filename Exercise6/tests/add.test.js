const request = require("supertest");


describe("ADD operation", () => {
    const app = setup();

    test("should add two numbers", async () => {
        const res = await request(app).get("/add?a=5&b=3"); // ?a=5 -> first query parameter (a=5) / b=3 -> second query paramenter b=3
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(8);
    });

    test("should return error when a or b is missing", async () => {
        const res = await request(app).get("/add?a=5");
        expect(res.status).toBe(400);
    });
});