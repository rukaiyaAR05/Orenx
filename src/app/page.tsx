import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import TrustProof from "./componets/TrustProof";
import CoreFeatures from "./componets/CoreFeatures";
import AboutApp from "./componets/AboutApp";
import ProductDemo from "./componets/ProductDemo";
import ProblemSection from "./componets/ProblemSection"
import SolutionSection from "./componets/SolutionSection";
import Benefits from "./componets/Benefits";
import TargetAudience from "./componets/TargetAudience";


import HighlightFeature from "./componets/HighlightFeature";
import Tools from "./componets/Tools";



import Pricing from "./componets/Pricing";
import Testimonials from "./componets/Testimonials";
import FAQ from "./componets/FAQ";
import FounderMessage from "./componets/FounderMessage";
import FinalCTA from "./componets/FinalCTA";
import Footer from "./componets/Footer";
import BackToTop from "./componets/BackToTop";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-emerald-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-50 rounded-full blur-3xl" />
      </div>

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustProof />
        
        <section id="about">
        <AboutApp />
        </section>

        <section id="features">
          <CoreFeatures />
        
        </section>
        <section id="demo">
          <ProductDemo/>
        </section>
        
        <HighlightFeature/>
        <ProblemSection/>
        <SolutionSection/>
       
        <Benefits/>

        <TargetAudience/>
        
        <section id="tools">
          <Tools/>
        </section>


        
       
       
 
        <section id="pricing">
          <Pricing/>
        </section>
        <section id="testimonials">
          <Testimonials/>
        </section>
        <section id="faq">
          <FAQ/>
        </section>
        <FounderMessage/>
        <section id="contact">
          <FinalCTA/>
        </section>
      </main>
      <Footer/>
      <BackToTop />
    </div>
  );
}