import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, Menu, X } from 'lucide-react';
import '@/css/index.css'; // Import TailwindCSS
import { ModeToggle } from './mode-toggle';

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

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search submitted");
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    if (value.length > 2) { // Only search if the query is 3 or more characters
        // Specify the backend URL
        const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/search_books?query=${value}`;
        fetch(backendUrl)
            .then(response => response.json())
            .then(data => {
              console.log('Received data:', data);
                setSuggestions(data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
              setSuggestions([]);
          });
    } else {
        setSuggestions([]);
    }
};

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex items-center">
        <Link to="/" className="flex items-center mr-2">
          <BookOpenText className="mr-2" />
          Tome
        </Link>
      </div>
      <ul className="hidden md:flex space-x-4 items-center">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="hover:text-gray-300">
              {item.label}
            </Link>
          </li>
        ))}
              <li>
          <form onSubmit={handleSearch} className="flex items-center">
          <input
  type="search"
  placeholder="Search..."
  className="px-3 py-2 rounded-l-md cursor-text focus:outline-none focus:ring focus:ring-blue-500 transition-colors text-white bg-gray-800 placeholder-white border border-transparent"
  style={{ borderImage: "linear-gradient(to right, white, #3b82f6) 1" }}
  value={searchQuery}
  onChange={handleInputChange}
/>
            <button
              type="submit"
              className="px-3 py-2 rounded-r-md bg-blue-500 hover:bg-blue-700 transition-colors text-white"
            >
              Search
            </button>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white text-black rounded shadow-lg z-10">
                {suggestions.map((book, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-100 border-b border-gray-300">
                    <img src={book.thumbnail} alt="Book cover" className="w-12 h-16 object-cover mr-4" />
                    <div>
                      <p className="font-semibold">{book.title}</p>
                      <p className="text-sm">{book.authors.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </form>
        </li>
      </ul>

      <div className="flex gap-4 items-center hidden md:flex">
        <ModeToggle />
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
