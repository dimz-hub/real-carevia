import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";



export default function Home() {
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
