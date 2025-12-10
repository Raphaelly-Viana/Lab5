// ADD
const add = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "You must provide 'a' and 'b' query parameters" });
    }

    const result = Number(a) + Number(b);
    res.json({ operation: "add", a, b, result });
};

// SUBTRACT
const subtract = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "You must provide 'a' and 'b' query parameters" });
    }

    const result = Number(a) - Number(b);
    res.json({ operation: "subtract", a, b, result });
};

// MULTIPLY
const multiply = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "You must provide 'a' and 'b' query parameters" });
    }

    const result = Number(a) * Number(b);
    res.json({ operation: "multiply", a, b, result });
};

// DIVIDE
const divide = (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({ error: "You must provide 'a' and 'b' query parameters" });
    }

    if (Number(b) === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed" });
    }

    const result = Number(a) / Number(b);
    res.json({ operation: "divide", a, b, result });
};

// EXPORT ALL AT ONCE
module.exports = {
    add,
    subtract,
    multiply,
    divide
};