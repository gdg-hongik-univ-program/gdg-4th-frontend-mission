import React from 'react'

// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 로고 및 소개 */}
        <div>
          <h2 className="text-2xl font-bold mb-2">CrossFit Games</h2>
          <p className="text-sm text-gray-400">
            The ultimate test of fitness. Follow the action and stay updated with the official CrossFit Games.
          </p>
        </div>

        {/* 링크 목록 */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-red-400">About</a></li>
            <li><a href="#" className="hover:text-red-400">Leaderboard</a></li>
            <li><a href="#" className="hover:text-red-400">Workouts</a></li>
            <li><a href="#" className="hover:text-red-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* SNS 아이콘 */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400">📸 Instagram</a>
            <a href="#" className="hover:text-red-400">🐦 Twitter</a>
            <a href="#" className="hover:text-red-400">📘 Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CrossFit Games. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;