import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-black to-black min-h-[60vh] flex items-center justify-center px-4">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-600 drop-shadow-lg">
          Leda 360 Guide
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Your comprehensive guide to navigating our system for Admins, Doctors, and Receptionists.
        </p>
      </header>
    </div>
  );
};

export default Header;
