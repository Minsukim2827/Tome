import React from 'react';
import { Link } from 'react-router-dom';
import '@/css/index.css';
import '@/css/tailwind.css';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Title</span>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/mylists" className="hover:text-gray-300">My Lists</Link>
        <Link to="/discover" className="hover:text-gray-300">Discover</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/signup" className="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 transition-colors">Signup</Link>
        <Link to="/login" className="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 transition-colors">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
