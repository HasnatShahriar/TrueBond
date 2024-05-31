import  { useState } from 'react';
import logoImg from '../../../public/logo.png'

const Navbar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-4 w-6"
              src={logoImg}
              alt="Logo"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">TrueBond</span>
          </div>
          <div className="flex">
            <div className="hidden md:flex">
              <a href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/biodatas" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Biodatas</a>
              <a href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
              {isLoggedIn ? (
                <a href="/dashboard" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
              ) : (
                <a href="/login" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/biodatas" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Biodatas</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="/contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          {isLoggedIn ? (
            <a href="/dashboard" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          ) : (
            <a href="/login" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;