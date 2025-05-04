'use client';
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        whatsapp: '',
        sendEstimate: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to send data to backend/WhatsApp/Email
        console.log('Form submitted:', formData);
    };

    return (
        <section id='ad-estimate' className='bg-blue-50 py-20'>
            <div id='estimate' className="bg-white mx-5 p-8 rounded-xl shadow-md max-w-2xl md:mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <h2 className="text-3xl font-bold text-center">
                        📩 Get Your OOH Estimate Instantly
                    </h2>
                </div>
                <p className="text-center text-gray-600 mb-6">
                    Fill in your details and we’ll send you a detailed estimate
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="block md:flex gap-4 space-y-4 md:space-y-0">
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                id='fullname'
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 rounded-md"
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                id='companyName'
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="block md:flex gap-4 space-y-4 md:space-y-0">
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 rounded-md"
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="whatsapp">WhatsApp Number</label>
                            <input
                                type="tel"
                                name="whatsapp"
                                id='whatsapp'
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="w-full px-4 py-3 outline-none ring-1 ring-gray-300 focus:ring-blue-500 focus:ring-2 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <label className="flex items-center text-sm text-gray-700">
                        <input
                            type="checkbox"
                            name="sendEstimate"
                            checked={formData.sendEstimate}
                            onChange={handleChange}
                            className="mr-2 accent-blue-600"
                        />
                        Send me estimate on WhatsApp and Email
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        SEND ESTIMATE NOW
                    </button>
                </form>
            </div>
        </section>
    );
}
