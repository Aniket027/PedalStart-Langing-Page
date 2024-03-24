/* eslint-disable no-unused-vars */
import React from 'react';

function Header() {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <img src="https://join.pedalstart.com/src/2021/05/logo.png" alt="PedalConnect Logo" className="h-8 cursor-pointer" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="block rounded-full bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block rounded-full bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="block rounded-full bg-black text-white px-4 py-2 hover:bg-gray-200 hover:text-black transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
