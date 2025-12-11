function generateId() {
    return Math.floor(Math.random() * 1000000000); // ID aleatório grande
}

module.exports = { generateId };