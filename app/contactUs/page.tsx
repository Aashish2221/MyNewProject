'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  general?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
      return;
    }

    setErrors({});
    setSuccessMessage('');
    setIsLoading(true);

    try {
      // Send form data as an object (like an array of fields) to your backend API
      const response = await axios.post('https://node-backend-1-yyjm.onrender.com/api/contact', formData);
      
      // On success: Clear form, show message (adjust based on your API response)
      if (response.data.message === 'Message sent successfully') { // Adjust to match your API
        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage('Thank you! We\'ll get back to you soon.');
      }
    } catch (error: any) {
      setErrors({ general: error.response?.data?.message || 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field-specific error on change
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 relative overflow-hidden">
      {/* Subtle background pattern for beauty */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <defs>
            <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grain)" />
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-100"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 to-gray-600 bg-clip-text text-transparent mb-3">
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Have questions about our resin art? We&apos;d love to hear from you! Fill out the form below.
            </p>
          </div>

          {/* Success Message */}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center bg-green-50 border border-green-200 text-green-700 text-sm p-4 rounded-xl mb-6"
            >
              <FaPaperPlane className="mr-2" /> {successMessage}
            </motion.div>
          )}

          {/* Error Message */}
          {errors.general && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-xl mb-6"
            >
              <FaComment className="mr-2" /> {errors.general}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Enter your name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
              </div>
              {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 flex items-center"><FaUser className="mr-1 w-3 h-3" /> {errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="yourname@example.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
              </div>
              {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center"><FaEnvelope className="mr-1 w-3 h-3" /> {errors.email}</p>}
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pt-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
              </div>
              {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1 flex items-center"><FaComment className="mr-1 w-3 h-3" /> {errors.message}</p>}
            </div>

            {/* Submit Button */}
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
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-slate-600 hover:text-slate-800 font-semibold transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}