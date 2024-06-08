
import { useEffect, useState } from 'react';
import logoImg from '../../assets/logo/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="px-4 divide-y bg-[#e66558] text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <img className="h-6" src={logoImg} alt="logo image" />
            </div>
            <span className="self-center text-2xl font-semibold text-white">TrueBond</span>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="hover:text-gray-200">Guides</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase">Social media</div>
            <div className="flex justify-start space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 hover:text-gray-200">
                <FaFacebook className="text-2xl" />
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1 hover:text-gray-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 hover:text-gray-200">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-200">Copyright © {currentYear} - All right reserved by TrueBond</div>
    </footer>
  );
};

export default Footer;
