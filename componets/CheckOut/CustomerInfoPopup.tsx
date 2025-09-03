'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaMapMarkerAlt, FaCity, FaMapPin } from 'react-icons/fa';
import { selectUser, updateCustomerInfo } from '@/redux/features/authSlice';
import axios from 'axios';

// Define types
interface CustomerInfo {
  userId: string;
  name?: string;
  emailId?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  profilePhoto?: string;
  address?: string;
}
interface FormErrors {
  email?: string;
  password?: string;
  name?: string;
  mobNo?: string;
  phone?: string;
  city?: string;
  pincode?: string;
  state?: string;
  address?: string;
  general?: string;
}

export default function CustomerInfoPopup({ customerInfo, onClose }: { customerInfo: CustomerInfo; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: `${customerInfo?.name || ''}`,
    email: customerInfo?.emailId || '',
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
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
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
      const response = await axios.put(
        'https://node-backend-1-yyjm.onrender.com/api/auth/customer-info',
        formData,
        {
          headers: { Authorization: `Bearer ${user?.user?.token}` },
        }
      );
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

        {/* Customer Personal Info */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                placeholder="Your Name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                placeholder="yourname@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
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
                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-sm"
                placeholder="Your Address"
              />
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          <div>
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
                placeholder="Photo URL (optional)"
              />
            </div>
          </div>
          {formData.profilePhoto && (
            <div className="flex justify-center">
              <img src={formData.profilePhoto} alt="Profile Preview" className="w-16 h-16 rounded-full object-cover" />
            </div>
          )}
          <div className="flex justify-between gap-4 mt-6">
            {customerInfo.address && <button
              onClick={onClose}
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition-all duration-300 text-sm"
            >
              Cancel
            </button>}
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