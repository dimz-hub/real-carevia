"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Family Member",
    text: "The care staff were very professional and compassionate. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Client",
    text: "Excellent service, reliable and understanding staff. Made life so much easier.",
  },
  {
    id: 3,
    name: "Mary Johnson",
    role: "Family Member",
    text: "We are so grateful for the care and attention provided. Truly wonderful team.",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-center py-10 px-4">
      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500">
        <p className="text-gray-700 text-lg mb-4">{reviews[index].text}</p>
        <h4 className="font-semibold text-blue-800 text-xl">{reviews[index].name}</h4>
        <span className="text-gray-500">{reviews[index].role}</span>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-4">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
