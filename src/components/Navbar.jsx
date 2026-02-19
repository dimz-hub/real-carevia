"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
    const [isLgScrolled, setIsLgScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isLg = window.innerWidth >= 1024;
      const isScrolled = window.scrollY > 0;

      setIsLgScrolled(isLg && isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);



  return (
    <>
      {/* Top bar */}
      <div className={`w-full ${isLgScrolled ? '' : '' } `}>
        <div className="flex items-center justify-between w-[93%] mx-auto">
          <div className="lg:flex  text-left lg:items-center lg:gap-[300px]">
          <Link href='/'>
          <Image
            src="/the-logo.png"
            alt="carevia"
            width={92}
            height={40}
            />
            </Link>
            </div>
            <div className={`hidden lg:flex mx-auto ${isLgScrolled? 'text-[20px]' : 'text-black  text-[20px] border-[#0E6BA8$]'} text-center items-center gap-[40px]  py-[12px] px-[40px]   rounded-[10px]  border-gray-5000/30 font-medium`}>
             <Link href = '/#about' className="border-b-2 border-[#0E6BA8] hover:border-neutral-50 hover:text-[21px]">About Us</Link>
             <Link href='/career' className="border-b-2 border-[#2E8A99] hover:border-neutral-50 hover:text-[21px]">Careers</Link>
             <Link href='/ourservices' className="border-b-2 border-[#0E6BA8] hover:border-neutral-50 hover:text-[21px]">Services</Link>
            </div>

            <Link href="/#contact">
             <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="
    border border-white
    bg-[#0E6BA8]
  text-white
  hidden lg:block
    py-[10px] px-[20px] 
    rounded-[10px]
    font-semibold
    transition-all duration-150
    active:bg-transparent
    active:scale-95
    touch-manipulation
    text-[19px]
    cursor-pointer
    hover:shadow-2xl
    hover:text-[20px]
  "
>
  Contact Now
</button>
    </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 lg:hidden"
          >
            {menuOpen ? (
              <FiX size={32} className="text-white" />
            ) : (
              <FiMenu size={34} className="text-[#2E8A99]" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay (BEHIND menu) */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none "}
          z-30 lg:hidden
        `}
      />

      {/* Slide-in menu (ON TOP of overlay) */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[80%] max-w-sm
          bg-[#0E2A47]
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          z-40 lg:hidden
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/ourservices" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/career" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
