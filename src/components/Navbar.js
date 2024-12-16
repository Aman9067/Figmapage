import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = ["Home", "Product", "Short", "Blog"];

  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
        {navItems.map((item, index) => (
          <Link
            to={`/${item.toLowerCase()}`}
            key={index}
            className="capitalize text-sm md:text-base lg:text-lg active:text-green-300 hover:text-yellow-400 transition-transform transform hover:scale-105"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
