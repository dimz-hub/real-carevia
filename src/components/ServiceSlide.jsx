"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  { id: 1, title: "Home Care", img: '/hero-img.jpg' },
  { id: 2, title: "Domiciliary Care", img: '/hero-img.jpg' },
  { id: 3, title: "Dementia Care", img: '/hero-img.jpg' },
  { id: 4, title: "Learning Difficulty Care", img: '/hero-img.jpg' },
  { id: 5, title: "End Of Life Care", img: '/hero-img.jpg' },
  { id: 6, title: "Respite Care", img: '/hero-img.jpg'},
];

export default function ServiceSlide() {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen width
  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 1024);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const totalSlides = isDesktop ? Math.ceil(cards.length / 3) : cards.length;

  const prev = () => {
    setIndex(i => i === 0 ? totalSlides - 1 : i - 1);
  };

  const next = () => {
    setIndex(i => i === totalSlides - 1 ? 0 : i + 1);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isDesktop]); // re-run if screen size changes

  return (
    <div className="w-full max-w-6xl mx-auto pt-[25px] ">
      {/* Arrows */}
      <div className="flex justify-end gap-3 mb-4 px-4">
        <button onClick={prev} className="p-2 rounded-full border-2 border-[#0E2954]">
          <ChevronLeft />
        </button>
        <button onClick={next} className="p-2 rounded-full border-2 border-[#0E295">
          <ChevronRight />
        </button>
      </div>

      {/* Viewport */}
      <div className="overflow-hidden">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (isDesktop ? 100 : 100)}%)`,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              className="
                flex-shrink-0
                w-full
                lg:w-1/3
                flex
                justify-center
              "
            >
              <div className="w-[90%] lg:w-[95%] bg-gradient-to-r from-white to-[#1F6E8C] rounded-xl shadow p-6">
                <h3 className="text-[26px] capitalize font-semibold mb-2 text-[#0E2954]">
                  {card.title}
                </h3>
                <div>
                  <Image 
                    src={card.img} 
                    alt="service-img" 
                    width={1000} 
                    height={300} 
                    className="w-[450px] rounded-2xl text-center" 
                  />
                </div>
                <p className="pt-[20px]">
                  Professional and compassionate eldercare staffing services.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
