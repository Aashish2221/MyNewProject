'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import { signIn } from '@/redux/features/authSlice';
import axios from 'axios';
interface FormErrors {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  address?: string;
  general?: string;
}
export default function RegisterForm({ switchToLogin }: { switchToLogin: () => void }) {
 const [formData, setFormData] = useState({ name: '', mobile: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.firstName = 'First name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.mobile) newErrors.mobNo = 'Mobile number is required';
    else if (formData.mobile.length < 10) newErrors.mobNo = 'Mobile number must be at least 10 digits';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    try {
      const response = await axios.post('https://node-backend-1-yyjm.onrender.com/api/auth/register', {
        ...formData,
        email: formData.email,
      });
      localStorage.setItem('token', response.data.token);
      if (response.data.message === 'Invalid credentials') {
        alert('User already exists, please login');
        setIsLoading(false);
        return;
      } else if (response.data.message === 'User Create Success Full') {
        dispatch(
          signIn(response.data.user)
        );
        alert('Registration successful!');
      }
    } catch (error: any) {
      setErrors({ general: error.response?.data?.message || 'Registration failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Get Started</h2>
      {errors.general && <p className="text-red-500 text-sm text-center mb-4 animate-pulse">{errors.general}</p>}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">User Name</label>
          <div className="mt-1 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="User Name"
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="mt-1 relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="yourname@gmail.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="••••••••"
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <div className="mt-1 relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="1234567890"
            />
          </div>
          {errors.mobNo && <p className="text-red-500 text-xs mt-1">{errors.mobNo}</p>}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-4 rounded-full hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 transition-all duration-300"
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <button onClick={switchToLogin} className="text-blue-600 hover:underline">Login</button>
        </p>
        <p className="text-center text-xs text-gray-400 mt-2">I agree to the platform's Terms of Service and Privacy Policy</p>
      </div>
    </motion.div>
  );
}