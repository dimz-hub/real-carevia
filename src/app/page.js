"use client"

import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import { useEffect, useState } from "react";



export default function Home() {

const [bgLoaded, setBgLoaded] = useState(false);
  
    // Preload hero background image
    useEffect(() => {
      const img = new window.Image();
      img.src = "/carevia5.png";
      img.onload = () => setBgLoaded(true);
    }, []);


  if (!bgLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-[#296374] border-t-transparent animate-spin" />
          <p className="text-[#296374] font-semibold text-lg">
            Loading services…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
   <Hero />        
   <About />
   <Services />
   <Career />
   <Contact />
   {/* <Review /> */}
   <Footer />
    </div>
  );
}
