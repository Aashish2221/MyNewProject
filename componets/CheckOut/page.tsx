'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Script from 'next/script';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import { selectCart, selectCustomerInfo, selectIsLoggedIn, selectUser, signIn, updateCustomerInfo } from '@/redux/features/authSlice';
import axios from 'axios';

// Define types
interface CustomerInfo {
  userId: string;
  lastName?: string;
  firstName?: string;
  emailId?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  profilePhoto?: string;
  address?: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

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

function LoginForm({ switchToRegister }: { switchToRegister: () => void }) {
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

function RegisterForm({ switchToLogin }: { switchToLogin: () => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobNo: '',
    phone: '',
    city: '',
    pincode: '',
    state: '',
    address: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.mobNo) newErrors.mobNo = 'Mobile number is required';
    else if (formData.mobNo.length < 10) newErrors.mobNo = 'Mobile number must be at least 10 digits';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (formData.phone.length < 10) newErrors.phone = 'Phone number must be at least 10 digits';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pincode) newErrors.pincode = 'Pincode is required';
    else if (formData.pincode.length < 6) newErrors.pincode = 'Pincode must be at least 6 digits';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.address) newErrors.address = 'Address is required';
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
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <div className="mt-1 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="First Name"
            />
          </div>
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <div className="mt-1 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="Last Name"
            />
          </div>
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
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
          <label htmlFor="mobNo" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <div className="mt-1 relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="mobNo"
              type="tel"
              name="mobNo"
              value={formData.mobNo}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="1234567890"
            />
          </div>
          {errors.mobNo && <p className="text-red-500 text-xs mt-1">{errors.mobNo}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="mt-1 relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="1234567890"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <div className="mt-1 relative">
            <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="Your City"
            />
          </div>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
          <div className="mt-1 relative">
            <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="pincode"
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="123456"
            />
          </div>
          {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <div className="mt-1 relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="Your State"
            />
          </div>
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <div className="mt-1 relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 text-sm"
              placeholder="Your Address"
            />
          </div>
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
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

function CustomerInfoPopup({ customerInfo, onClose }: { customerInfo: CustomerInfo; onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: customerInfo?.firstName || '',
    lastName: customerInfo?.lastName || '',
    emailId: customerInfo?.emailId || '',
    mobNo: customerInfo?.mobNo || '',
    phone: customerInfo?.phone || '',
    city: customerInfo?.city || '',
    pincode: customerInfo?.pincode || '',
    state: customerInfo?.state || '',
    profilePhoto: customerInfo?.profilePhoto || '',
    address: customerInfo?.address || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (formData.phone.length < 10) newErrors.phone = 'Phone number must be at least 10 digits';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pincode) newErrors.pincode = 'Pincode is required';
    else if (formData.pincode.length < 6) newErrors.pincode = 'Pincode must be at least 6 digits';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.address) newErrors.address = 'Address is required';
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
      const response = await axios.put(
        'https://node-backend-1-yyjm.onrender.com/api/auth/customer-info',
        formData,
        {
          headers: { Authorization: `Bearer ${user?.user?.token}` },
        }
      );
      // Dispatch updateCustomerInfo to update Redux state
      dispatch(updateCustomerInfo(response.data));
      alert('Profile updated successfully!');
      onClose();
    } catch (error: any) {
      setErrors({ general: error.response?.data?.message || 'Profile update failed' });
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Customer Information</h2>
        {errors.general && <p className="text-red-500 text-sm text-center mb-4 animate-pulse">{errors.general}</p>}

        {/* Customer Personal Info (Hidden) */}
        <div className="hidden">
          <input name="firstName" value={formData.firstName} readOnly />
          <input name="lastName" value={formData.lastName} readOnly />
          <input name="emailId" value={formData.emailId} readOnly />
          <input name="mobNo" value={formData.mobNo} readOnly />
        </div>

        {/* Customer Shipping Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Shipping Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-1 relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="1234567890"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <div className="mt-1 relative">
                <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="Your City"
                />
              </div>
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
              <div className="mt-1 relative">
                <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="pincode"
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="123456"
                />
              </div>
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <div className="mt-1 relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="state"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="Your State"
                />
              </div>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <div className="mt-1 relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="Your Address"
                />
              </div>
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            <div className="col-span-2">
              <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
              <div className="mt-1 relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="profilePhoto"
                  type="text"
                  name="profilePhoto"
                  value={formData.profilePhoto}
                  onChange={handleChange}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                  placeholder="Photo URL"
                />
              </div>
            </div>
            {formData.profilePhoto && (
              <div className="col-span-2 flex justify-center">
                <img src={formData.profilePhoto} alt="Profile Preview" className="w-16 h-16 rounded-full object-cover" />
              </div>
            )}
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <button
              onClick={onClose}
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 transition-all duration-300 text-sm"
            >
              {isLoading ? 'Updating...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PaymentPopup({ customerInfo, cart, amountInPaise, onConfirm, onCancel, loading, error }: { 
  customerInfo: CustomerInfo, 
  cart: CartItem[], 
  amountInPaise: number, 
  onConfirm: () => void, 
  onCancel: () => void, 
  loading: boolean, 
  error: string | null 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Confirm Payment</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4 animate-pulse">{error}</p>}

        {/* Customer Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Customer Information</h3>
          <div className="space-y-4">
            {/* Personal Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Personal Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>First Name:</strong> {customerInfo?.firstName || 'Not provided'}</p>
                <p><strong>Last Name:</strong> {customerInfo?.lastName || 'Not provided'}</p>
                <p><strong>Email:</strong> {customerInfo?.emailId || 'Not provided'}</p>
                <p><strong>Mobile:</strong> {customerInfo?.mobNo || 'Not provided'}</p>
              </div>
            </div>
            {/* Shipping Info */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Shipping Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>Phone:</strong> {customerInfo?.phone || 'Not provided'}</p>
                <p><strong>City:</strong> {customerInfo?.city || 'Not provided'}</p>
                <p><strong>Pincode:</strong> {customerInfo?.pincode || 'Not provided'}</p>
                <p><strong>State:</strong> {customerInfo?.state || 'Not provided'}</p>
                <p className="col-span-2"><strong>Address:</strong> {customerInfo?.address || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Order Summary</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item: CartItem) => (
                  <div key={item.id} className="flex justify-between mb-1 text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-sm">
                  <span>Total</span>
                  <span>₹{(amountInPaise / 100).toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onCancel}
            className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading || cart.length === 0}
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-2 px-4 rounded-full hover:from-indigo-600 hover:to-indigo-800 disabled:opacity-50 transition-all duration-300 text-sm"
          >
            {loading ? 'Processing...' : 'Confirm Payment'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Checkout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const customerInfo = useSelector(selectCustomerInfo) as CustomerInfo;
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart) || [];
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showCustomerInfoPopup, setShowCustomerInfoPopup] = useState(false);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  // Fetch customer info on mount
  useEffect(() => {
    if (isLoggedIn) {
      const fetchCustomerInfo = async () => {
        try {
          const response = await axios.get('https://node-backend-1-yyjm.onrender.com/api/auth/customer-info', {
            headers: { Authorization: `Bearer ${user?.user?.token}` },
          });
          if (response.data.message === 'Customer info not found'){
              setShowCustomerInfoPopup(true);
              return;
          }
          dispatch(
            updateCustomerInfo(response.data)
          );
        } catch (error: any) {
          console.error('Failed to fetch customer info:', error);
          setError('Failed to load customer information');
        }
      };
      fetchCustomerInfo();
    }
  }, [isLoggedIn, dispatch]);

  // Redirect to cart if empty
  useEffect(() => {
    if (cart.length === 0) {
      window.location.href = '/cart';
    }
  }, [cart]);

  const createOrderId = async () => {
    try {
      console.log('Creating order with amount (paise):', amountInPaise);
      const response = await fetch('/api/razorpay-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInPaise }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to create order');
      console.log('Order created:', data);
      return data.orderId;
    } catch (error: any) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const processPayment = async () => {
    if (!isLoggedIn) {
      setError('Please log in or register to proceed with payment');
      return;
    }

    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
      setError('Payment gateway configuration is missing');
      console.error('Missing NEXT_PUBLIC_RAZORPAY_KEY_ID');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Starting payment process...');
      console.log('Cart:', cart);
      console.log('Amount in paise:', amountInPaise);

      const orderId = await createOrderId();
      console.log('Order ID:', orderId);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: 'INR',
        name: `${customerInfo?.firstName || ''} ${customerInfo?.lastName || 'Customer'}`,
        description: 'Purchase of Cart Items',
        order_id: orderId,
        handler: async (response: any) => {
          console.log('Payment response:', response);
          const data = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          const result = await fetch('/api/razorpay-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const res = await result.json();
          console.log('Verification result:', res);

          if (res.success) {
            window.location.href = '/checkout?status=success';
          } else {
            setError('Payment verification failed: ' + res.error);
          }
        },
        prefill: {
          name: `${customerInfo?.firstName || ''} ${customerInfo?.lastName || 'Customer'}`,
          email: customerInfo?.emailId || 'customer@example.com',
          contact: customerInfo?.mobNo || undefined,
        },
        theme: {
          color: '#3399cc',
        },
        payment_method: {
          upi: true,
          netbanking: true,
          card: true,
          wallet: true,
        },
      };

      console.log('Razorpay options:', options);
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', (response: any) => {
        console.error('Payment failed:', response.error);
        setError('Payment failed: ' + response.error.description);
      });
      paymentObject.open();
    } catch (error: any) {
      console.error('Payment error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
      setShowPaymentPopup(false);
    }
  };

  // Calculate total amount in paise (Razorpay expects paise)
  const amountInPaise = Math.round(
    cart.reduce((sum: number, item: CartItem) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + price * quantity;
    }, 0) * 100
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Section - Promotional Content */}
          <div className="w-full md:w-1/2 p-6 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://via.placeholder.com/600x800)' }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Checkout</h2>
              <p className="text-lg">Complete your purchase securely</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm key="login" switchToRegister={switchToRegister} />
              ) : (
                <RegisterForm key="register" switchToLogin={switchToLogin} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

 return (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => console.log('Razorpay script loaded')}
        onError={() => {
          console.error('Failed to load Razorpay script');
          setError('Failed to load payment gateway. Please try again.');
        }}
      />
      <h1 className="text-4xl font-serif font-bold text-center text-gray-900 mb-8">Checkout</h1>

      {/* User Information Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-sans font-semibold text-gray-800">User Information</h2>
          <button
            onClick={() => setShowCustomerInfoPopup(true)}
            className="text-indigo-600 text-sm font-sans font-medium underline"
          >
            Edit Information
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Personal Information (Left) */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-sans font-medium text-gray-700 mb-3 text-left">Personal Information</h3>
            <div className="space-y-2 text-sm font-sans text-gray-600">
              <div className="flex items-center">
                <span className="w-24 font-medium">Name:</span>
                <span>{user?.user?.name || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">Email:</span>
                <span>{user?.user?.email || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">Mobile:</span>
                <span>{user?.user?.mobile || 'Not provided'}</span>
              </div>
            </div>
          </div>
          {/* Shipping Information (Right) */}
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-sans font-medium text-gray-700 mb-3 text-left">Shipping Information</h3>
            <div className="space-y-2 text-sm font-sans text-gray-600">
              <div className="flex items-center">
                <span className="w-24 font-medium">Phone:</span>
                <span>{customerInfo?.phone || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">City:</span>
                <span>{customerInfo?.city || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">Pincode:</span>
                <span>{customerInfo?.pincode || 'Not provided'}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium">State:</span>
                <span>{customerInfo?.state || 'Not provided'}</span>
              </div>
              <div className="flex items-start">
                <span className="w-24 font-medium">Address:</span>
                <span>{customerInfo?.address || 'Not provided'}</span>
              </div>
              {/* <div className="flex justify-center mt-4">
                {customerInfo?.profilePhoto ? (
                  <img
                    src={customerInfo.profilePhoto}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 text-xs font-sans">No Photo</span>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-6">
        <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-4 text-left">Order Summary</h2>
        {(cart?.length ?? 0) === 0 ? (
          <p className="text-gray-500 text-sm font-sans text-center">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item: CartItem) => (
              <div key={item.id} className="flex justify-between mb-2 text-sm font-sans text-gray-600">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between text-base font-sans font-semibold text-gray-800">
              <span>Total</span>
              <span>₹{(amountInPaise / 100).toFixed(2)}</span>
            </div>
          </>
        )}
      </div>

      {/* Payment Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-4 text-left">Payment</h2>
        <button
          onClick={() => setShowPaymentPopup(true)}
          disabled={loading || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || (cart?.length ?? 0) === 0}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-full text-sm font-sans font-medium disabled:opacity-50"
        >
          {loading ? 'Processing...' : `Pay ₹${(amountInPaise / 100).toFixed(2)}`}
        </button>
        {!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && (
          <div className="text-red-500 mt-3 text-sm font-sans font-medium text-center">Payment gateway configuration is missing</div>
        )}
        {(cart?.length ?? 0) === 0 && (
          <div className="text-red-500 mt-3 text-sm font-sans font-medium text-center">Your cart is empty</div>
        )}
      </div>

      {/* Customer Info Popup */}
      <AnimatePresence>
        {showCustomerInfoPopup && (
          <CustomerInfoPopup
            customerInfo={customerInfo}
            onClose={() => setShowCustomerInfoPopup(false)}
          />
        )}
      </AnimatePresence>

      {/* Payment Popup */}
      <AnimatePresence>
        {showPaymentPopup && (
          <PaymentPopup
            customerInfo={customerInfo}
            cart={cart}
            amountInPaise={amountInPaise}
            onConfirm={processPayment}
            onCancel={() => setShowPaymentPopup(false)}
            loading={loading}
            error={error}
          />
        )}
      </AnimatePresence>
    </div>
  </div>
);
}