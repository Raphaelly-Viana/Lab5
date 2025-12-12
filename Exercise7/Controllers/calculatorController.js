const calculator = require("../Library/calculator");
const random = require("../Library/random");
const logger = require("../Library/logger");

function add(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const result = calculator.add(a, b);
    const id = random.generateId();

    logger.log(`ID: ${id} | ADD result: ${result}`);

    res.json({ id, result });
}

function subtract(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const result = calculator.subtract(a, b);
    const id = random.generateId();

    logger.log(`ID: ${id} | SUBTRACT result: ${result}`);

    res.json({ id, result });
}

function multiply(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const result = calculator.multiply(a, b);
    const id = random.generateId();

    logger.log(`ID: ${id} | MULTIPLY result: ${result}`);

    res.json({ id, result });
}

function divide(req, res) {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const result = calculator.divide(a, b);
    const id = random.generateId();

    logger.log(`ID: ${id} | DIVIDE result: ${result}`);

    res.json({ id, result });
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};