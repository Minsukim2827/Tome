import React from 'react';
import '@/css/index.css'; // Import TailwindCSS

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8 fixed bottom-0 w-full">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Tome - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
