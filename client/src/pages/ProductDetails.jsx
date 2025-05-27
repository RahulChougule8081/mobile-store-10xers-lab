import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mb-2">Price: ₹{product.price}</p>
        <p className="text-gray-700">Description: {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
