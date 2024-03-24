/* eslint-disable no-unused-vars */
import React from 'react'

function OfferingSection() {
  return (
    <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            PedalStart Offering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-white-400 shadow-gray-200">
              <h3 className="text-xl font-bold text-white mb-4">
                Career Building
              </h3>
              <p className="text-white">
                Nurturing startup enthusiasts and helping them build their careers
                in the startup ecosystem.
              </p>
            </div>
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-white-400 shadow-gray-200"> {/* Highlighted with yellow border */}
              <h3 className="text-xl font-bold text-white mb-4">
                Career Opportunities
              </h3>
              <p className="text-white">
                Access to co-founder roles, project management, graphic design,
                and more!
              </p>
            </div>
            <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-white-400 shadow-gray-200"> {/* Highlighted with yellow border */}
              <h3 className="text-xl font-bold text-white mb-4">
                Access to Meetups
              </h3>
              <p className="text-white">
                Exclusive access to offline and online events for networking and
                learning, organized by PedalStart.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OfferingSection