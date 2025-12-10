const request = require("supertest");


describe("SUBTRACT operation", () => {
    const app = setup();

    test("should subtract two numbers", async () => {
        const res = await request(app).get("/subtract?a=10&b=4");
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(6);
    });

    test("should return error when params are missing", async () => {
        const res = await request(app).get("/subtract?a=10");
        expect(res.status).toBe(400);
    });
});