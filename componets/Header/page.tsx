'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, signOut } from '@/redux/features/authSlice';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeUserDropdown = () => {
    setIsUserDropdownOpen(false);
  };

  // Get the first letter of the user's name and capitalize it
  const getUserInitial = () => {
    if (!user?.user?.name) return 'U'; // Default to 'U' if no name
    return user.user.name.charAt(0).toUpperCase();
  };

  // Placeholder logout handler (to be implemented based on your auth system)
  const handleLogout = () => {
    // Add your logout logic here (e.g., dispatch logout action, clear tokens)
    closeUserDropdown();
    closeMobileMenu();
    dispatch(signOut())
  };

  return (
    <nav className="bg-gray-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 bg-black rounded-lg">
            <Link href="/" onClick={closeMobileMenu} className="text-2xl font-bold">
              <Image
                src="/LOGOIMAGE.webp"
                alt="Logo"
                width={80}
                height={80}
                className="rounded-full sm:w-16 sm:h-16"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-center space-x-2">
              <Link 
                href="/" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200"
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200"
              >
                Services
              </Link>
              <Link 
                href="/contactUs" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200"
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={toggleUserDropdown}
                    className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-gray-800 font-semibold focus:outline-none"
                    aria-label="User menu"
                  >
                    {getUserInitial()}
                  </button>
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href="/authPage" 
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-200"
                >
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
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
            >
              Services
            </Link>
            <Link 
              href="/contactUs" 
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <div className="relative px-3 py-2">
                <button
                  onClick={toggleUserDropdown}
                  className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-gray-800 font-semibold focus:outline-none"
                  aria-label="User menu"
                >
                  {getUserInitial()}
                </button>
                {isUserDropdownOpen && (
                  <div className="mt-2 w-full bg-gray-800 rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/authPage" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}