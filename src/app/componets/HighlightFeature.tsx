"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const verticals = [
  {
    title: "Retail & Wholesale",
    image: "/I1.jpg",
  },
  {
    title: "Electronics & Appliances",
    image: "/I2.jpg",
  },
  {
    title: "Supermarket & Grocery",
    image: "/I3.jpg",
  },
  {
    title: "Fashion & Apparel",
    image: "/I1.jpg",
  },
  {
    title: "Pharmacy & Healthcare",
    image: "/I2.jpg",
  },
  {
    title: "Hardware & Building",
    image: "/I3.jpg",
  },
];

export default function HighlightFeature() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3;

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateSectionTop = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateSectionTop);
    updateSectionTop();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSectionTop);
    };
  }, []);

  // Calculate animation based on scroll
  const getCardStyle = (index: number) => {
    if (!mounted) return { transform: "translateY(0) scale(1)", opacity: 1 };
    
    const sectionProgress = (scrollY - sectionTop + 500) / 400;
    const cardDelay = index * 0.12;
    const progress = Math.max(0, Math.min(1, sectionProgress - cardDelay));
    
    // Start from above (translateY negative) and zoomed in, then come to normal
    const translateY = (1 - progress) * -100; // Start -100px above
    const scale = 1 + (1 - progress) * 0.3; // Start at 1.3, end at 1
    const opacity = progress;

    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: opacity,
      transition: "transform 0.4s ease-out, opacity 0.4s ease-out",
    };
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + 1 >= verticals.length - cardsPerView + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? verticals.length - cardsPerView : prev - 1
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#0B2B26] via-[#0F3D35] to-[#0B2B26] py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight max-w-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Industries powered by
            </span>
            <br />
            <span className="text-white">our inventory management</span>
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400/60 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400/60 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
          >
            {verticals.map((vertical, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] relative group cursor-pointer"
                style={getCardStyle(index)}
              >
                {/* Card */}
                <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-emerald-500/20">
                  {/* Image */}
                  <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B26]/90 via-[#0B2B26]/30 to-transparent" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold">
                      {vertical.title}
                    </h3>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/50 rounded-2xl transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: verticals.length - cardsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-emerald-400 w-6" 
                  : "bg-emerald-500/30 hover:bg-emerald-500/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
