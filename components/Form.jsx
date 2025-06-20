'use client';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        whatsapp: '',
        sendEstimate: true,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidPhone = /^\d{10,15}$/.test(formData.whatsapp);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

        if (!isValidPhone) {
            toast.warn("Enter a valid WhatsApp number.");
            return;
        }

        if (!isValidEmail) {
            toast.warn("Enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                toast.success("Estimate sent successfully!");

                setFormData({
                    fullName: '',
                    companyName: '',
                    email: '',
                    whatsapp: '',
                    sendEstimate: true,
                });
            } else {
                toast.error(`Failed: ${result.error || 'Unknown error'}`);
            }
        } catch (error) {
            toast.error("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='ad-estimate' className='bg-blue-50 py-20'>
            <div className="bg-white mx-5 p-8 rounded-xl shadow-md max-w-2xl md:mx-auto">
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
                        disabled={loading}
                        className={`w-full ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-0.5'} text-white py-4 cursor-pointer rounded-md font-semibold hover:shadow-md backdrop-blur-lg transition-all delay-100 ease-in-out`}
                    >
                        {loading ? (<div className='flex items-center justify-center gap-2'>
                            <Loader className='animate-spin' /> Sending...
                        </div>) : "SEND ESTIMATE NOW"}
                    </button>
                </form>
            </div>
        </section>
    );
}
