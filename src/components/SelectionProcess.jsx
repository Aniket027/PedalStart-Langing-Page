/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

function SelectionProcess() {
  return (
    <section className="bg-black py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Selection Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card for Form Screening */}
        <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
          <h3 className="text-xl font-bold text-white mb-4">
            Form Screening
          </h3>
          <p className="text-white">
            Your application will be carefully screened to ensure a good
            fit.
          </p>
        </div>
        {/* Card for One-on-One Interaction */}
        <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
          <h3 className="text-xl font-bold text-white mb-4">
            One-on-One Interaction
          </h3>
          <p className="text-white">
            You'll have a one-on-one interaction with our team to discuss
            your goals and expectations.
          </p>
        </div>
        {/* Card for Access to Meetups */}
        <div className="bg-black-800 shadow-md rounded-lg p-6 text-white border border-black-400 shadow-gray-200">
          <h3 className="text-xl font-bold text-white mb-4">
            Access to Meetups
          </h3>
          <p className="text-white">
            Successful applicants will gain access to exclusive PedalStart
            meetups and events.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SelectionProcess