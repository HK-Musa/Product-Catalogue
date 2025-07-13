const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/catalogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Product Schema
const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    image: String,
    category: String,
    description: String
});

// Routes
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ message: 'Product added!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
