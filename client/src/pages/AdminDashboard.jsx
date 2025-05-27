import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';
import api from '../services/api';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products/admin'); // Ensure this matches your backend route
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {products.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded shadow-md">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Brand</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.brand}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
