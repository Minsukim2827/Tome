import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, Menu, X } from 'lucide-react';
import '@/css/index.css'; // Import Tailwind CSS

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'My Lists', href: '/mylists' },
  { label: 'Discover', href: '/discover' },
  { label: 'Profile', href: '/profile' }
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-2">
          <BookOpenText className="mr-2" />
          Tome
        </Link>
      </div>
      <ul className="hidden md:flex space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="hover:text-gray-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center hidden md:flex">
        <Link to="/login" className="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 transition-colors">Login</Link>
        <Link to="/signup" className="px-3 py-2 rounded bg-orange-500 hover:bg-orange-700 transition-colors">Signup</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-white z-50">
          {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40 flex flex-col items-center md:hidden">
          <div className="bg-gray-800 w-full p-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="text-white">
                  <Link to={item.href} onClick={() => setMobileDrawerOpen(false)} className="block w-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-x-4">
              <Link to="/login" onClick={() => setMobileDrawerOpen(false)} className="py-2 px-3 border rounded-md text-white">Login</Link>
              <Link to="/signup" onClick={() => setMobileDrawerOpen(false)} className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white">Signup</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
