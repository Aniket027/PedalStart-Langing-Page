/* eslint-disable no-unused-vars */
import React from 'react';
import './fontAwesomeIcons';
import { Header, Footer, OfferingSection, SelectionProcess, WhyJoinSection, JoinNowSection, HeroSection } from './components';

function App() {

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <HeroSection/>

      {/* Offering Section */}
      <OfferingSection/>

      {/* Selection Process Section */}
      <SelectionProcess/>

      {/* Why Join Section */}
      <WhyJoinSection/>

      {/* Join Now Section */}
      <JoinNowSection/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
