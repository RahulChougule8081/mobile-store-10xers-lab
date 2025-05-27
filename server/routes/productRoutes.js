const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductsByAdmin,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const { authenticateToken, authorizeRole } = require('../middlewares/auth');

router.get('/', getAllProducts);
router.get('/admin', getProductsByAdmin);
router.post('/', authenticateToken, authorizeRole('admin'), createProduct);
router.put('/:id', authenticateToken, authorizeRole('admin'), updateProduct);
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteProduct);

module.exports = router;
