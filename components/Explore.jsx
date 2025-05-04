'use client';
import React, { useState } from 'react';

// Simplified India SVG path data
const IndiaMap = ({ onCityClick, selectedCities }) => {
    return (
        <svg viewBox="0 0 800 900" className="w-full h-full">
            {/* India outline - accurate path */}
            <path
                d="M 400,100 
                   C 450,100 500,120 550,150 
                   C 600,200 620,250 630,300 
                   C 640,350 650,400 630,450 
                   C 600,500 580,550 550,600 
                   C 520,650 500,700 480,750 
                   C 450,800 400,850 350,800 
                   C 300,750 250,700 200,650 
                   C 150,600 120,550 100,500 
                   C 80,450 70,400 60,350 
                   C 50,300 40,250 30,200 
                   C 40,150 50,100 400,100 Z
                   M 350,200 C 360,210 370,220 380,230 
                   M 420,300 C 430,310 440,320 450,330 
                   M 300,400 C 310,410 320,420 330,430 
                   M 250,500 C 260,510 270,520 280,530"
                fill="#fff"
                stroke="#D6D6DA"
                strokeWidth="2"
            />

            {/* City markers */}
            {cities.map((city) => (
                <g
                    key={city.id}
                    transform={`translate(${city.svgX},${city.svgY})`}
                    onClick={() => onCityClick(city.id)}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <circle
                        r="12"
                        fill={selectedCities.includes(city.id) ? '#3B82F6' : '#9CA3AF'}
                        stroke="#FFF"
                        strokeWidth="2"
                    />
                    {selectedCities.includes(city.id) && (
                        <text
                            x="0"
                            y="-15"
                            textAnchor="middle"
                            className="text-xl font-semibold fill-blue-500"
                        >
                            {city.name}
                        </text>
                    )}
                </g>
            ))}
        </svg>
    );
};

const cities = [
    {
        id: 1,
        name: 'Delhi',
        svgX: 400,
        svgY: 150,
        impressions: '7L+',
        price: 85000,
        type: 'Billboard'
    },
    {
        id: 2,
        name: 'Bengaluru',
        svgX: 380,
        svgY: 550,
        impressions: '6L+',
        price: 75000,
        type: 'Billboard'
    },
    {
        id: 3,
        name: 'Hyderabad',
        svgX: 350,
        svgY: 450,
        impressions: '5L+',
        price: 65000,
        type: 'Billboard'
    },
    {
        id: 4,
        name: 'Mumbai',
        svgX: 250,
        svgY: 350,
        impressions: '9L+',
        price: 95000,
        type: 'Billboard'
    },
    {
        id: 5,
        name: 'Pune',
        svgX: 280,
        svgY: 400,
        impressions: '4L+',
        price: 60000,
        type: 'Billboard'
    },
    {
        id: 6,
        name: 'Chennai',
        svgX: 420,
        svgY: 600,
        impressions: '5L+',
        price: 70000,
        type: 'Billboard'
    },
    {
        id: 7,
        name: 'Kolkata',
        svgX: 500,
        svgY: 300,
        impressions: '6L+',
        price: 65000,
        type: 'Billboard'
    }
];

const Explore = () => {
    const [selectedCities, setSelectedCities] = useState([1]); // Default selected: Delhi, Bengaluru, Hyderabad

    const toggleCity = (cityId) => {
        setSelectedCities(prev =>
            prev.includes(cityId)
                ? prev.filter(id => id !== cityId)
                : [...prev, cityId]
        );
    };

    const calculateTotal = () => {
        return cities
            .filter(city => selectedCities.includes(city.id))
            .reduce((total, city) => total + city.price, 0);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <section id='ad-locations' className="container mx-auto p-6 rounded-lg py-20">
            <h2 className="text-3xl text-center font-bold text-gray-800 mb-10">Explore Ad Locations Across India</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map Section */}
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm h-[500px]">
                    <IndiaMap
                        onCityClick={toggleCity}
                        selectedCities={selectedCities}
                    />
                </div>

                {/* Selected Locations Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Selected Locations</h3>

                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                        {cities.filter(city => selectedCities.includes(city.id)).map((city) => (
                            <div key={city.id} className="py-3 border-b border-gray-100 last:border-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-medium text-gray-900">{city.name}</h4>
                                            <button
                                                onClick={() => toggleCity(city.id)}
                                                className="text-xs text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {city.type} • {city.impressions} Impressions
                                        </p>
                                    </div>
                                    <p className="font-semibold">{formatCurrency(city.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between py-4 border-t border-gray-200 mt-4">
                        <span className="font-semibold">Estimated Total:</span>
                        <span className="font-bold text-lg">{formatCurrency(calculateTotal())}</span>
                    </div>

                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md mt-4 hover:shadow-md backdrop-blur-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all delay-100 ease-in-out">
                        <a href='#estimate'>GET DETAILED ESTIMATE</a>
                    </button>

                    {cities.some(city => !selectedCities.includes(city.id)) && (
                        <div className="mt-6">
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Available locations:</h4>
                            <div className="flex flex-wrap gap-2">
                                {cities.filter(city => !selectedCities.includes(city.id)).map(city => (
                                    <button
                                        key={city.id}
                                        onClick={() => toggleCity(city.id)}
                                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                                    >
                                        {city.name} (+{formatCurrency(city.price)})
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Explore;