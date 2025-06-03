import React from 'react'

// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold cursor-pointer">CrossFit Games</div>
      <ul className="hidden md:flex space-x-8 text-sm font-medium">
        <li><a href="#" className="hover:text-red-500">Home</a></li>
        <li><a href="#" className="hover:text-red-500">Events</a></li>
        <li><a href="#" className="hover:text-red-500">Leaderboard</a></li>
        <li><a href="#" className="hover:text-red-500">Shop</a></li>
        <li><a href="#" className="hover:text-red-500">About</a></li>
      </ul>
      <button className="md:hidden text-red-500 font-bold">Menu</button>
    </nav>
  );
};

export default Navbar;