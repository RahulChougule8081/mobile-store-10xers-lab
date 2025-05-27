const Product = require('../models/TempProduct');
const User = require('../models/TempUser');

const createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await Product.create({ name, description, price, adminId: req.user.id });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: { model: User, attributes: ['email'] } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getProductsByAdmin = async (req, res) => {
  const { adminEmail } = req.query;
  try {
    const admin = await User.findOne({ where: { email: adminEmail, role: 'admin' } });
    if (!admin) return res.status(404).json({ error: 'Admin not found' });

    const products = await Product.findAll({ where: { adminId: admin.id } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id, adminId: req.user.id } });
    if (!product) return res.status(404).json({ error: 'Product not found or unauthorized' });

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id, adminId: req.user.id } });
    if (!product) return res.status(404).json({ error: 'Product not found or unauthorized' });

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createProduct, getAllProducts, getProductsByAdmin, updateProduct, deleteProduct };
