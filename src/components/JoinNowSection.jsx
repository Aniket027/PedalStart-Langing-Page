/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function JoinNowSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                name,
                email,
            });
            setMessage(response.data.message);
            setName('');
            setEmail('');
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };
    return (
        <section id="join" className="bg-black py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Join PedalStart Now
                </h2>
                <p className="text-white mb-8">
                    Fill the form below &amp; let's pave your startup journey together!
                </p>
                <div className="max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white bg-black text-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black py-3 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300"
                        >
                            Join Now
                        </button>
                    </form>
                    {message && (
                        <p className="mt-4 text-white font-semibold">{message}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default JoinNowSection