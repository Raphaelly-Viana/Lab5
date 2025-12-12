function generateId(){
  // gera id aleatório grande (36-bit)
  return Math.floor(Math.random() * 1_000_000_000);
}
module.exports = { generateId };