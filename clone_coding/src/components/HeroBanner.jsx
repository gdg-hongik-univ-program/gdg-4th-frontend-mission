import React from 'react'

// src/components/HeroBanner.jsx
const HeroBanner = () => {
  return (
    <section className="relative bg-gray-900 text-white h-[500px] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4">The CrossFit Games</h1>
      <p className="max-w-xl text-lg mb-8">
        The ultimate test of fitness — watch the world’s top athletes compete live.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition">
        Watch Live
      </button>
      {/* 배경 이미지 예시 */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: 'url(https://games.crossfit.com/sites/default/files/2023-01/cfgames_bg_0.jpg)'}}></div>
    </section>
  );
};

export default HeroBanner;