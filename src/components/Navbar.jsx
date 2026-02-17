"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="w-full">
        <div className="flex items-center justify-between w-[93%] mx-auto">
          <Image
            src="/carevia-logo.png"
            alt="carevia"
            width={90}
            height={80}
          />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50"
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
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          z-30
        `}
      />

      {/* Slide-in menu (ON TOP of overlay) */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[80%] max-w-sm
          bg-[#0E2A47]
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          z-40
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/ourservices" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/career" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
