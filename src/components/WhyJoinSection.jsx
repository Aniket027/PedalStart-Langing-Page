/* eslint-disable no-unused-vars */
import React from 'react'

function WhyJoinSection() {
  return (
    <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Why Join?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
              <h3 className="text-xl font-bold text-white mb-4">
                Career Paths
              </h3>
              <p className="text-white">
                Gain access to co-founder roles, project management, graphic
                design, and more!
              </p>
            </div>
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
              <h3 className="text-xl font-bold text-white mb-4">
                Exclusive Meetups
              </h3>
              <p className="text-white">
                Access offline and online events for networking and learning,
                organized by PedalStart.
              </p>
            </div>
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
              <h3 className="text-xl font-bold text-white mb-4">
                Startup Access
              </h3>
              <p className="text-white">
                Connect with accelerated startups and our cohorts through
                PedalStart.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyJoinSection