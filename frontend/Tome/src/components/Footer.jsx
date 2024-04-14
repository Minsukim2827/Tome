import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Tome - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
