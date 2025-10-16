'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser, signOut } from '@/redux/features/authSlice';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserDropdownOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsUserDropdownOpen(false);
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const getUserInitial = () => {
    if (!user?.user?.name) return 'U';
    return user.user.name.charAt(0).toUpperCase();
  };

  const handleLogout = () => {
    setIsUserDropdownOpen(false);
    setIsMobileMenuOpen(false);
    dispatch(signOut());
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { href: '/about', label: 'About', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { href: '/services', label: 'Services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { href: '/contactUs', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left Aligned */}
            <Link 
              href="/" 
              className="flex-shrink-0 group relative z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                scrolled ? 'bg-gradient-to-br from-slate-700 to-gray-600' : 'bg-white/10 backdrop-blur-sm'
              } p-1 group-hover:scale-105 group-hover:rotate-3`}>
                <Image
                  src="/LOGOIMAGE.webp"
                  alt="Logo"
                  width={70}
                  height={70}
                  className="rounded-lg transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </Link>

            {/* Desktop Navigation - Centered with Better Spacing */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    scrolled
                      ? isActive(link.href)
                        ? 'text-slate-700 bg-slate-100'
                        : 'text-gray-600 hover:text-slate-700 hover:bg-slate-50'
                      : isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-600 to-gray-600 transform origin-left transition-transform duration-300 rounded-full ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* User Section - Right Aligned */}
            <div className="hidden lg:flex lg:items-center lg:ml-8">
              {isLoggedIn ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleUserDropdown}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      scrolled
                        ? 'bg-gradient-to-br from-slate-700 to-gray-600 text-white focus:ring-slate-500 hover:shadow-lg hover:scale-110'
                        : 'bg-white text-gray-300 focus:ring-white hover:shadow-xl hover:scale-110'
                    }`}
                    aria-label="User menu"
                  >
                    {getUserInitial()}
                  </button>

                  {/* Dropdown Menu */}
                  {isUserDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl py-2 transform transition-all duration-200 border border-gray-100 animate-slideDown">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 truncate">{user?.user?.name || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user?.user?.email || ''}</p>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Profile
                      </Link>
                      <Link
                        href="/settings"
                        onClick={() => setIsUserDropdownOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </Link>
                      <hr className="my-2 border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/authPage"
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    scrolled
                      ? 'bg-gradient-to-r from-slate-700 to-gray-600 text-white hover:shadow-lg'
                      : 'bg-white text-gray-800 hover:shadow-xl'
                  }`}
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button - Right Aligned */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 z-50 ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100 focus:ring-slate-500'
                  : 'text-gray-300 hover:bg-white/10 focus:ring-white'
              }`}
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
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 lg:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" className="flex-shrink-0" onClick={toggleMobileMenu}>
              <Image
                src="/LOGOIMAGE.webp"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-slate-700 to-gray-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-slate-50 hover:shadow-md'
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                </svg>
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Mobile User Section */}
            {isLoggedIn ? (
              <div className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-gray-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {getUserInitial()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{user?.user?.name || 'User'}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.user?.email || ''}</p>
                  </div>
                </div>
                <Link
                  href="/profile"
                  onClick={toggleMobileMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 mb-2 block"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Your Profile</span>
                </Link>
                <Link
                  href="/settings"
                  onClick={toggleMobileMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-slate-50 rounded-xl transition-colors duration-200 mb-4 block"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Settings</span>
                </Link>
                <hr className="border-gray-200 mb-4" />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/authPage"
                onClick={toggleMobileMenu}
                className="block px-4 py-3 mt-6 bg-gradient-to-r from-slate-700 to-gray-600 text-white font-semibold rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Optional: Add this to your globals.css for the slide-down animation */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </>
  );
}