'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectCustomerInfo, selectUser } from '@/redux/features/authSlice';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get the first letter of the user's name and capitalize it
  const getUserInitial = () => {
    
    if (!user?.name) return 'U'; // Default to 'U' if no name
    const firstLetter = user.name.charAt(0).toUpperCase();
    return firstLetter;
  };

  return (
    <nav className="bg-gray-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/ChatGPT Image Aug 6, 2025, 09_24_26 PM.png"
                alt="Logo"
                width={90}
                height={90}
                className="rounded-[70%]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200">
                Home
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200">
                About
              </Link>
              <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200">
                Services
              </Link>
              <Link href="/contactUs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200">
                Contact
              </Link>
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-gray-800 font-semibold">
                    {getUserInitial()}
                  </div>
                </div>
              ) : (
                <Link href="/authPage" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200">
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white hover:bg-gray-700 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200">
              Services
            </Link>
            <Link href="/contactUs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200">
              Contact
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-2 px-3 py-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-gray-800 font-semibold">
                  {getUserInitial()}
                </div>
              </div>
            ) : (
              <Link href="/authPage" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
