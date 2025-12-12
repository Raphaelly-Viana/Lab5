const axios = require("axios");

const BASE = "https://fakestoreapi.com";

async function listProducts(req, res) {
  try {
    const limit = req.query.limit;
    const url = limit ? `${BASE}/products?limit=${limit}` : `${BASE}/products`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products", details: err.message });
  }
}

async function getProduct(req, res) {
  try {
    const id = req.params.id;
    const response = await axios.get(`${BASE}/products/${id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product", details: err.message });
  }
}

// optional: checkout stub
async function checkout(req,res){
  
  res.json({ message: "Checkout endpoint (stub). Client should post cart and user info here."});
}

module.exports = { 
    listProducts,
    getProduct, 
    checkout 
};