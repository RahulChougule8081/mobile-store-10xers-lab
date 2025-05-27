import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import api from '../services/api';

const CustomerHome = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products');
        dispatch(setProducts(res.data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">All Mobile Phones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-800 font-bold mt-2">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerHome;
