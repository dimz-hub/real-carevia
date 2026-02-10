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
  { id: 6, title: "respite care" , img: '/hero-img.jpg'},
];

export default function ServiceSlide() {
  const [index, setIndex] = useState(0);

  const totalSlidesMobile = cards.length;
  const totalSlidesDesktop = Math.ceil(cards.length / 3);

  const prev = () => {
    setIndex((i) =>
      i === 0 ? totalSlidesDesktop - 1 : i - 1
    );
  };

  const next = () => {
    setIndex((i) =>
      i === totalSlidesDesktop - 1 ? 0 : i + 1
    );
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto pt-[25px] ">
      {/* Arrows */}
      <div className="flex justify-end gap-3 mb-4 px-4">
        <button onClick={prev} className="p-2 rounded-full border">
          <ChevronLeft />
        </button>
        <button onClick={next} className="p-2 rounded-full border">
          <ChevronRight />
        </button>
      </div>

      {/* Viewport */}
      <div className="overflow-hidden">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {cards.map((card) => (
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
              {/* Card */}
              <div className="w-[90%] lg:w-[95%] bg-gradient-to-r  from-white to-blue-100 rounded-xl shadow p-6">
                <h3 className="text-[26px] capitalize font-semibold mb-2  text-[#0E6BA8]">
                  {card.title}
                </h3>
                <div>
                    <Image src={card.img} alt="service-img" width={1000} height={300} className="w-[450px] rounded-2xl text-center" />
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
