/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function HeroSection() {
  return (
    <section className="relative py-20 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/564x/21/cb/44/21cb44137fb5821ff39f8c37ded3b822.jpg')",
          opacity: 0.25,
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          Passionate about startups?
        </h1>
        <p className="text-white text-lg mb-8">
          Dive into Bangalore's thriving scene with PedalStart, backed by
          PedalStart!
        </p>
        <a
          href="#join"
          className="bg-white text-black py-3 px-6 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
          Join Now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
