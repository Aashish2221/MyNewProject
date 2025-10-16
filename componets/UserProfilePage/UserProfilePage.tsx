"use client";
import { useState } from 'react';
import { User, Edit, Mail, Phone, MapPin, CreditCard, Package, Settings, LogOut } from 'lucide-react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  address?: string;
  ordersCount: number;
  totalSpent: number;
}

interface UserProfilePageProps {
  user: UserProfile;
  onLogout?: () => void;
  onEditProfile?: () => void;
}

export default function UserProfilePage({ user, onLogout, onEditProfile }: UserProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing && onEditProfile) {
      onEditProfile(); // Trigger any parent edit handler
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real app, save to API here
    console.log('Saved profile:', editedUser);
    setIsEditing(false);
  };

  const avatarSrc = user.avatar || 'https://via.placeholder.com/150?text=User'; // Fallback avatar

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
            <div className="flex-shrink-0">
              <img
                src={avatarSrc}
                alt={user.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="text-2xl md:text-3xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none w-full text-center md:text-left"
                  />
                ) : (
                  user.name
                )}
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-2">
                <Mail className="w-4 h-4" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="text-sm bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                ) : (
                  user.email
                )}
              </div>
              {user.phone && (
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={editedUser.phone || ''}
                      onChange={handleInputChange}
                      className="text-sm bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                    />
                  ) : (
                    user.phone
                  )}
                </div>
              )}
            </div>
            <button
              onClick={handleEditToggle}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {isEditing && (
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mr-2"
              >
                Save Changes
              </button>
            </div>
          )}

          {user.address && (
            <div className="flex items-center gap-2 text-gray-600 mt-4 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>{user.address}</span>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <Package className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Orders</h3>
            <p className="text-2xl font-bold text-gray-600">{user.ordersCount}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Total Spent</h3>
            <p className="text-2xl font-bold text-gray-600">${user.totalSpent.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200">
            <Settings className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Account Settings</h3>
            <p className="text-sm text-gray-600">Manage preferences</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Package className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">View Orders</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Payment Methods</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">Shipping Addresses</span>
            </button>
          </div>
        </div>

        {/* Logout Section */}
        {onLogout && (
          <div className="mt-8 text-center">
            <button
              onClick={onLogout}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 w-full md:w-auto"
            >
              <LogOut className="w-5 h-5" />
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}