
// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logoImg from '../../assets/logo/logo.png';
// import { AuthContext } from '../../providers/AuthProvider';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const {user,logOut} = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => { })
//       .then(error => console.error(error))
//   }


//   const navOptions = (
//     <>
//       <Link to="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
//       <Link to="/biodatas" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Biodatas</Link>
//       <Link to="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
//       <Link to="/contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
//       {user ? (
//         <>
//           <Link to="/dashboard" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
//           <button onClick={handleLogOut} className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
//         </>
//       ) : (
//         <Link to="/login" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
//       )}
//     </>
//   );



//   return (
//     <nav className="shadow-lg bg-pink-200 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <img
//               className="h-6 w-8"
//               src={logoImg}
//               alt="Logo"
//             />
//             <span className="ml-2 text-xl font-bold text-gray-800">TrueBond</span>
//           </div>
//           <div className="flex">
//             <div className="hidden md:flex">
//               {navOptions}
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none">
//                 <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//                 <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navOptions}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
      <Link to="/biodatas" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Biodatas</Link>
      <Link to="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
      <Link to="/contact" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
      {user ? (
        <>
          <Link to="/dashboard" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
          <button onClick={handleLogOut} className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Logout</button>
          <div title={user?.displayName}>
            <img className='w-10 h-10 rounded-full'
              referrerPolicy='no-referrer'
              alt='User Profile Photo'
              src={user?.photoURL}
            />
          </div>
        </>
      ) : (
        <Link to="/login" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
      )}
    </>
  );

  return (
    <nav className="shadow-lg bg-pink-200 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-6 w-8"
              src={logoImg}
              alt="Logo"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">TrueBond</span>
          </div>
          <div className="flex">
            <div className="hidden md:flex">
              {navOptions}
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
          {navOptions}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

