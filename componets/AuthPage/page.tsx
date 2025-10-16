'use client';

import { addToCart, selectUser, signIn } from '@/redux/features/authSlice';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash } from 'react-icons/fa';
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
  const [showPassword, setShowPassword] = useState(false);
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
          signIn(response.data.user)
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
      className="w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100 p-4"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
        <p className="text-sm text-gray-500">Sign in to your account</p>
      </div>

      {errors.general && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-6"
        >
          <FaLock className="mr-2" /> {errors.general}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="yourname@gmail.com"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center"><FaEnvelope className="mr-1 w-3 h-3" /> {errors.email}</p>}
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="••••••••"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1 flex items-center"><FaLock className="mr-1 w-3 h-3" /> {errors.password}</p>}
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-slate-700 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <FaLock className="w-4 h-4" />
              <span>Sign In</span>
            </>
          )}
        </motion.button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{' '}
        <button onClick={switchToRegister} className="text-slate-600 font-semibold hover:underline transition-colors">
          Get started
        </button>
      </p>
    </motion.div>
  );
}

function RegisterForm({ switchToLogin }: { switchToLogin: () => void }) {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
          signIn(response.data.user)
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
      className="w-full p-2 lg:p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100 py-10"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent mb-2">Create Account</h2>
        <p className="text-sm text-gray-500">Join us today</p>
      </div>

      {errors.general && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg mb-6"
        >
          <FaUser className="mr-2" /> {errors.general}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="Annonymous"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
          </div>
          {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 flex items-center"><FaUser className="mr-1 w-3 h-3" /> {errors.name}</p>}
        </div>

        <div className="relative">
          <label htmlFor="mobileNo" className="block text-sm font-semibold text-gray-700 mb-2">Mobile No</label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="mobileNo"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="annymomo0o"
              aria-describedby={errors.mobileNo ? "mobile-error" : undefined}
            />
          </div>
          {errors.mobileNo && <p id="mobile-error" className="text-red-500 text-xs mt-1 flex items-center"><FaPhone className="mr-1 w-3 h-3" /> {errors.mobileNo}</p>}
        </div>

        <div className="relative">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="annymomo0o@gmail.com"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center"><FaEnvelope className="mr-1 w-3 h-3" /> {errors.email}</p>}
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="••••••••"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1 flex items-center"><FaLock className="mr-1 w-3 h-3" /> {errors.password}</p>}
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-slate-700 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing up...</span>
            </>
          ) : (
            <>
              <FaUser className="w-4 h-4" />
              <span>Sign Up</span>
            </>
          )}
        </motion.button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center space-x-1">
        <input type="checkbox" id="terms" className="mr-2" required />
        <label htmlFor="terms" className="text-gray-600 cursor-pointer">I agree to Terms of Service and Privacy Policy</label>
      </p>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{' '}
        <button onClick={switchToLogin} className="text-slate-600 font-semibold hover:underline transition-colors">
          Login here
        </button>
      </p>
    </motion.div>
  );
}

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 p-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <defs>
            <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grain)" />
        </svg>
      </div>

      <div className="w-full lg:max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          {/* Left Section - Promotional Content (Hidden on Mobile) */}
          <motion.div 
            className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')]" // Replace with your image
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-gray-900/40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  Sparshrekha
                </h1>
                <p className="text-lg text-slate-200 mb-6 max-w-sm">
                  Discover handcrafted resin art that captures your emotions and memories. Join thousands of creators today.
                </p>
                <div className="flex space-x-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Secure</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Fast</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Form (Full Width on Mobile) */}
          <div className="w-full lg:w-1/2 p-0">
            <div className="p-2 lg:p-12 flex flex-col items-center justify-center h-full">
              <div className="w-full max-w-md">
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
        </div>
      </div>
    </div>
  );
}