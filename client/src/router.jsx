import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import CustomerHome from './pages/CustomerHome';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/add" element={<AddProduct />} />
      <Route path="/admin/edit/:id" element={<EditProduct />} />
      <Route path="/" element={<CustomerHome />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;
