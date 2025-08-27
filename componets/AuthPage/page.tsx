'use client';

import { addToCart, selectUser, signIn } from '@/redux/features/authSlice';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

interface FormErrors {
  email?: string;
  password?: string;
  mobileNo?: string;
  name?: string;
  general?: string;
}

function LoginForm({ switchToRegister }: { switchToRegister: () => void }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
      const response = await axios.post('https://node-backend-1-yyjm.onrender.com/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      if(response.data.massage === "Invalid credentials"){
        alert('User already exists, please login');
        setIsLoading(false);
        return;
      }
      else if(response.data.message == "Login Success Full"){
        dispatch(
          signIn({
            userId: response.data.user.id,
            userEmail: response.data.user.email,
            UserName: response.data.user.name,
            token: response.data.user.token,
            phoneNumber: response.data.user.mobile,
            id: response.data.user.id,
          })
        );
        router.push('/');
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
      {errors.general && <p className="text-red-500 text-sm text-center mb-4">{errors.general}</p>}
      {/* <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-4 hover:bg-red-700 transition-colors duration-200">
        <FaGoogle className="mr-2" /> Sign in with Google
      </button>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-6 hover:bg-blue-700 transition-colors duration-200">
        <FaFacebookF className="mr-2" /> Sign in with Facebook
      </button> */}
      {/* <div className="text-center text-gray-500 mb-4">or</div> */}
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
            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 mt-4"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
      {/* <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{' '}
        <button onClick={switchToRegister} className="text-blue-600 hover:underline">Login</button>
      </p> */}
    </motion.div>
  );
}

function RegisterForm({ switchToLogin }: { switchToLogin: () => void }) {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile) newErrors.mobileNo = 'MobileNo is required';
    else if (formData.mobile.length < 3) newErrors.mobileNo = 'MobileNo must be at least 3 characters';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };
//  console.log(user);
 
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
      const response = await axios.post('https://node-backend-1-yyjm.onrender.com/api/auth/register', formData);
      localStorage.setItem('token', response.data.token);  
          
      if(response.data.massage === "Invalid credentials"){
        alert('User already exists, please login');
        setIsLoading(false);
        return;
      }
      else if(response.data.message == "User Create Success Full"){
        dispatch(
          signIn({
            userId: response.data.user.id,
            userEmail: response.data.user.email,
            UserName: response.data.user.name,
            token: response.data.user.token,
            phoneNumber: response.data.user.mobile,
            id: response.data.user.id,
          })
        );
        router.push('/');
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
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Get started.</h2>
      {errors.general && <p className="text-red-500 text-sm text-center mb-4">{errors.general}</p>}
      {/* <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-4 hover:bg-red-700 transition-colors duration-200">
        <FaGoogle className="mr-2" /> Sign up with Google
      </button>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center mb-6 hover:bg-blue-700 transition-colors duration-200">
        <FaFacebookF className="mr-2" /> Sign up with Facebook
      </button> */}
      {/* <div className="text-center text-gray-500 mb-4">or</div> */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Annonymous"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">Mobile No</label>
        <input
          id="mobileNo"
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="annymomo0o"
        />
        {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="annymomo0o@gmail.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 mt-4"
      >
        {isLoading ? 'Signing up...' : 'Sign In'}
      </button>
      {/* <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{' '}
        <button onClick={switchToLogin} className="text-blue-600 hover:underline">Login</button>
      </p> */}
      <p className="text-center text-xs text-gray-400 mt-2">I agree to platform's Terms of Service and Privacy Policy</p>
    </motion.div>
  );
}

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="w-full max-w-4xl bg-white/90 rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section - Promotional Content */}
        <div className="w-full md:w-1/2 p-6 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://via.placeholder.com/600x800)' }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Activate</h2>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <LoginForm key="login" switchToRegister={switchToRegister} />
              ) : (
                <RegisterForm key="register" switchToLogin={switchToLogin} />
              )}
            </AnimatePresence>
            <p className="text-center text-sm text-gray-500 mt-4">
              {isLogin ? 'Already have an account?' : 'Already have an account?'}{' '}
              <button onClick={isLogin ? switchToRegister : switchToLogin} className="text-blue-600 hover:underline">
                {isLogin ? 'Get started' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}