'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { signIn } from '@/redux/features/authSlice';
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

export default function LoginForm({ switchToRegister }: { switchToRegister: () => void }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
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
      const response = await axios.post('https://node-backend-1-yyjm.onrender.com/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      if (response.data.message === 'Invalid credentials') {
        alert('Invalid credentials');
        setIsLoading(false);
        return;
      } else if (response.data.message === 'Login Success Full') {
        dispatch(
          signIn(response.data.user)
        );
        alert('Login successful!');
      }
    } catch (error: any) {
      setErrors({ general: error.response?.data?.message || 'Login failed' });
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
      {errors.general && <p className="text-red-500 text-sm text-center mb-4 animate-pulse">{errors.general}</p>}
      <div className="space-y-4">
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
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
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
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
              placeholder="••••••••"
            />
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all duration-300"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{' '}
          <button onClick={switchToRegister} className="text-blue-600 hover:underline">Get started</button>
        </p>
      </div>
    </motion.div>
  );
}