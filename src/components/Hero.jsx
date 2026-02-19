"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Registered Nurses",
    "Support Workers",
    "Healthcare Assistants",
    "Cleaners & Domestic Staff",
  ];

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="relative w-screen h-[80vh]  md:h-screen">
      {/* Wrapper to hold background and overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background image */}
        <div
          className="
            w-full h-full
            bg-[url('/carevia1.png')]
            md:bg-[url('/carevia3a.png')]
            bg-cover
            bg-center
            md:bg-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center  text-center text-white px-4 h-full">
        {/* Tagline */}
        <p className="bg-white text-[14.4px] md:text-[13px] text-blue-800 lg:mt-[100px] mt-[15px] py-[10px] px-[20px] font-semibold rounded-[20px]">
          Redefining Care Staffing across UK
        </p>

        {/* Intro text */}
      <p className="mt-[50px] max-w-xl text-[33px] md:text-[44px] lg:mt-[20px] capitalize text-white font-bold">
         Trusted care, <br className="hidden"/> when and where you need it
        </p>
        <p className="mt-6 max-w-xl text-[19px] mt-[47px] md:mt-[30px] md:text-[23px]  font-bold">
          Your trusted team for every care you need
        </p>

        {/* Scrolling staff roles */}
        <div
          className="mt-6 h-[40px] overflow-hidden relative w-full max-w-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="absolute w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${index * 40}px)` }}
          >
            {roles.map((role, i) => (
              <div
                key={i}
                className="h-[40px] flex items-center justify-center text-[25px] md:text-[30px] font-semibold"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

         <div className="flex gap-[10px] mt-[10px]">
    <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="
    border border-white
    bg-[#0E6BA8] text-white
    p-3 mt-[35px]
    rounded-[10px]
    font-semibold
    transition-all duration-150
    active:bg-transparent
    active:scale-95
    touch-manipulation
    text-[19px]
  "
>
  Contact Now
</button>


         <button className="
  border border-white
  bg-[#629FAD] p-3 mt-[35px]
  rounded-[10px]
  font-semibold
  transition-all duration-150
  active:bg-transparent
  active:scale-95
  touch-manipulation
  text-[19px]
">
  <Link href='/career'>
  Career in Care
  </Link>
</button>

        </div>
      </div>
    </section>
  );
}







