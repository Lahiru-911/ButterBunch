"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/h1.jpg", alt: "cake1" },
  { src: "/h2.jpg", alt: "cake2" },
  { src: "/h3.jpg", alt: "cake3" },
  { src: "/h4.jpg", alt: "cake4" },
  { src: "/h5.jpg", alt: "cake5" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="relative w-full h-full">
              {/* Main div containing image */}
              <main className="w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Content inside the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    WELCOME TO
                  </h2>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    Butter Bunch Cakes
                  </h1>
                  <h3 className="text-lg md:text-xl mb-6">
                    Delicious Cakes & Sweet Treats
                  </h3>
                  <Link
                    href="/about"
                    className="px-4 py-2 bg-white border border-[#ff532c] text-black rounded-4xl font-medium text-sm hover:bg-[#ff532c] hover:text-white transition duration-300"
                  >
                    EXPLORE OUR CAKES
                  </Link>
                </div>
              </main>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 z-30 transform -translate-y-1/2 hidden md:flex">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-white/70 hover:bg-[#ff532c] hover:text-white text-[#ff532c] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff532c] focus:ring-offset-2"
        >
          <span className="text-lg">&#10094;</span>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-white/70 hover:bg-[#ff532c] hover:text-white text-[#ff532c] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#ff532c] focus:ring-offset-2"
        >
          <span className="text-lg">&#10095;</span>
        </button>
      </div>

      {/* Overlay for darker effect (optional) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div> */}
    </section>
  );
}
