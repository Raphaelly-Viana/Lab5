const request = require("supertest");


describe("MULTIPLY operation", () => {
    const app = setup();

    test("should multiply two numbers", async () => {
        const res = await request(app).get("/multiply?a=3&b=5");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(15);
    });

    test("should return error when parameters are missing", async () => {
        const res = await request(app).get("/multiply?a=3");
        expect(res.status).toBe(400);
    });
});