"use client"; // If you're using Next.js 13 app directory, else remove this line.

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/h2.jpg", alt: "Thamaravila Wilpattu" },
  { src: "/h3.jpg", alt: "Luxury Tented Safari Villas" },
  { src: "/h4.jpg", alt: "Resort & Hotel" },
  { src: "/h5.jpg", alt: "Resort & Hotel" },
  { src: "/h6.jpg", alt: "Resort & Hotel" },
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
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h2 className="text-2xl mb-2">WELCOME TO</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Thamarawila Wilpaththu – Luxury Tented Safari Villas
        </h1>
        <h3 className="text-xl mb-6">Resort & Hotel</h3>
        <Link
          href="/about"
          className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-[#b67d29] hover:text-white transition duration-300"
        >
          LEARN MORE
        </Link>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-30">
        <button
          onClick={prevSlide}
          className="bg-white/60 hover:bg-white/90 text-black rounded-full p-3 transition duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/60 hover:bg-white/90 text-black rounded-full p-3 transition duration-300"
        >
          &#10095;
        </button>
      </div>

      {/* Overlay for darker effect (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
    </section>
  );
}
