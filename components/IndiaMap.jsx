"use client";
import React from "react";

const cities = [
    { id: 1, name: "Delhi", x: 1270, y: 530 },
    { id: 2, name: "Mumbai", x: 1020, y: 1200 },
    { id: 3, name: "Bengaluru", x: 1100, y: 1550 },
    { id: 4, name: "Hyderabad", x: 1200, y: 1400 },
    { id: 5, name: "Chennai", x: 1340, y: 1650 },
    { id: 6, name: "Kolkata", x: 1650, y: 680 },
];

const IndiaMap = ({ onCityClick, selectedCities = [] }) => (
    <svg
        height="2400"
        viewBox="0 0 2400 2400"
        width="2400"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-auto"
    >
        {/* Paste your full SVG content here (from the SVG file I gave earlier) */}

        {/* Interactive City Markers */}
        {cities.map((city) => (
            <g
                key={city.id}
                transform={`translate(${city.x}, ${city.y})`}
                onClick={() => onCityClick(city.id)}
                className="cursor-pointer"
            >
                <circle
                    r="20"
                    fill={selectedCities.includes(city.id) ? '#3B82F6' : '#9CA3AF'}
                    stroke="#FFF"
                    strokeWidth="4"
                />
                {selectedCities.includes(city.id) && (
                    <text
                        x="0"
                        y="-30"
                        textAnchor="middle"
                        fill="#3B82F6"
                        fontSize="30"
                        fontWeight="bold"
                    >
                        {city.name}
                    </text>
                )}
            </g>
        ))}
    </svg>
);

export default IndiaMap;
