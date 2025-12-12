const calculator = require("../Libraries/calculator");
const random = require("../Libraries/random");
const logger = require("../Libraries/logger");


// NUmber - if there is any invalid character - become NaN. 
//  Ex: Number("12.5") → 12.5
// Number("12.5abc") → NaN

//If I use parseFloat - ignore what comes after the numbers
// Ex: parseFloat("12.5") → 12.5
// parseFloat("12.5abc") → 12.5  


function handleNumbers(req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
 if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "a and b must be numbers" });
    return null; // <-- IMPORTANTE: impedir quebra
  }
  return { a, b };
}

function add(req, res) {
  const numbers = handleNumbers(req, res);
  if (!numbers) return; // prevent error

  const { a, b } = numbers;

  const result = calculator.add(a, b);
  const id = random.generateId();

  logger.log(`ID:${id} | ADD ${a} + ${b} = ${result}`);
  res.json({ id, result });
}

function subtract(req, res) {
  const numbers = handleNumbers(req, res);
  if (!numbers) return;

  const { a, b } = numbers;

  const result = calculator.subtract(a, b);
  const id = random.generateId();

  logger.log(`ID:${id} | SUB ${a} - ${b} = ${result}`);
  res.json({ id, result });
}

function multiply(req, res) {
  const numbers = handleNumbers(req, res);
  if (!numbers) return;

  const { a, b } = numbers;

  const result = calculator.multiply(a, b);
  const id = random.generateId();

  logger.log(`ID:${id} | MUL ${a} * ${b} = ${result}`);
  res.json({ id, result });
}


function divide(req, res) {
  const numbers = handleNumbers(req, res);
  if (!numbers) return;

  const { a, b } = numbers;

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }

  const result = calculator.divide(a, b);
  const id = random.generateId();

  logger.log(`ID:${id} | DIV ${a} / ${b} = ${result}`);
  res.json({ id, result });
}


module.exports = { 
    add, 
    subtract, 
    multiply, 
    divide 
};