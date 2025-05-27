import React, { useState } from 'react';
import api from '../services/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', formData);
      // Redirect to login or dashboard
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
