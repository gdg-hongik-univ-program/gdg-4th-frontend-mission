import React from 'react'

// src/components/InfoSection.jsx
const InfoSection = () => {
  return (
    <section className="py-16 bg-white text-gray-900 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">What are the CrossFit Games?</h2>
      <p className="max-w-3xl mx-auto text-center mb-6 leading-relaxed">
        The CrossFit Games are a true test of fitness — a multi-day competition featuring the world’s best athletes.
        The events are designed to find the “Fittest on Earth.”
      </p>
      <p className="max-w-3xl mx-auto text-center leading-relaxed">
        Whether you’re an athlete or a fan, experience the energy, intensity, and community of the Games.
      </p>
    </section>
  );
};

export default InfoSection;