'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="w-full ">
        <div className="flex items-center justify-between w-[93%] mx-auto p">
          <Image
            src="/carevia-logo.png"
            alt="carevia"
            width={90}
            height={80}
          />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 transition-transform duration-300"
          >
            {menuOpen ? (
              <FiX size={32} className="text-white rotate-90 transition-all duration-300" />
            ) : (
              <FiMenu size={34} className="text-[#2E8A99] transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Slide-in menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-[80%] max-w-sm
          bg-[#0E2A47]
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          z-40
        `}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl font-medium">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="hover:underline cursor-pointer">Services</span>
          <span className="hover:underline cursor-pointer">Careers</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </nav>
      </div>
    </>
  )
}

export default Navbar
