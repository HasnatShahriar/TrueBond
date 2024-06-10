
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error));
  }

  const navOptions = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/biodatas"
        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
      >
        Biodatas
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
      >
        Contact Us
      </NavLink>
      {user ? (
        <>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
          >
            Dashboard
          </NavLink>
          <button onClick={handleLogOut} className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Logout
          </button>
          <div title={user?.displayName}>
            <img className='w-10 h-10 rounded-full'
              referrerPolicy='no-referrer'
              alt='User Profile Photo'
              src={user?.photoURL}
            />
          </div>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-gray-600 text-white' : 'text-white hover:text-gray-200'}`}
        >
          Login
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="shadow-lg bg-[#e66558] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/">
            <div className="flex items-center">
              <img
                className="h-6 w-8"
                src={logoImg}
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-white">TrueBond</span>
            </div>
          </NavLink>
          <div className="flex">
            <div className="hidden md:flex">
              {navOptions}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none">
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
          {navOptions}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
