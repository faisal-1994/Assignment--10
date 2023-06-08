const express = require('express');
const mongoose = require('mongoose');
const Product = require("./src/models/productModel");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://faisal:21031994@cluster0.bnsrejb.mongodb.net/products') 
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// GET /products route handler
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
