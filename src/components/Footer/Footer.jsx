/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="flex items-center mb-8 lg:mb-0">
          <img
            src="https://join.pedalstart.com/src/2021/05/logo.png"
            alt="PedalStart Logo"
            className="h-12 mr-4"
          />
          <div>
            <p className="text-lg font-bold">PedalStart</p>
            <p className="text-gray-400">India's fast-growing startup founders' community</p>
          </div>
        </div>

        <div className="text-gray-300" id='contact'>
          <div className="mb-4">
            <p className="text-white font-bold text-xl">Get in touch</p>
          </div>
          <p className="flex items-center">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            <span>+91-9560346002</span>
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon="envelope" className="mr-2" />
            <span>connect@pedalstart.com</span>
          </p>
          <div className="flex flex-col">
            <div className="flex items-center">
              <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
              <span>SpringHouse Coworking, Grand Mall,</span>
            </div>
            <div className="ml-5">Sikandarpur, Gurgaon, Haryana 122004, IN</div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with copyright */}
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} PedalConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
