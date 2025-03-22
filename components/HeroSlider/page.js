// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const slides = [
//   { src: "/h2.jpg", alt: "Thamaravila Wilpattu" },
//   { src: "/h1.jpg", alt: "Luxury Tented Safari Villas" },
//   { src: "/h4.jpg", alt: "Resort & Hotel" },
//   { src: "/h5.jpg", alt: "Resort & Hotel" },
//   { src: "/h6.jpg", alt: "Resort & Hotel" },
// ];

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Slides */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={1920}
//               height={1080}
//               className="object-cover"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
//         <h2 className="text-2xl mb-2">WELCOME TO</h2>
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           Butter Bunch Cakes
//         </h1>
//         <h3 className="text-xl mb-6">Delicious Cakes & Sweet Treats</h3>
//         <Link
//           href="/about"
//           className="px-6 py-3 bg-white text-black rounded-4xl font-semibold hover:bg-[#e86e16] hover:text-white transition duration-300"
//         >
//           EXPLORE OUR CAKES
//         </Link>
//       </div>

//       {/* Controls */}
//       <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 z-30 transform -translate-y-1/2">
//         <button
//           onClick={prevSlide}
//           aria-label="Previous Slide"
//           className="bg-white/70 hover:bg-[#e86e16] hover:text-white text-[#e86e16] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e86e16] focus:ring-offset-2"
//         >
//           <span className="text-lg">&#10094;</span>
//         </button>
//         <button
//           onClick={nextSlide}
//           aria-label="Next Slide"
//           className="bg-white/70 hover:bg-[#e86e16] hover:text-white text-[#e86e16] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e86e16] focus:ring-offset-2"
//         >
//           <span className="text-lg">&#10095;</span>
//         </button>
//       </div>

//       {/* Overlay for darker effect (optional) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10"></div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/h1.jpg", alt: "Thamaravila Wilpattu" },
  { src: "/h2.jpg", alt: "Luxury Tented Safari Villas" },
  { src: "/h3.jpg", alt: "Resort & Hotel" },
  { src: "/h4.jpg", alt: "Resort & Hotel" },
  { src: "/h5.jpg", alt: "Resort & Hotel" },
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
               
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h2 className="text-2xl mb-2">WELCOME TO</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#ff532c]">
          Butter Bunch Cakes
        </h1>
        <h3 className="text-xl mb-6">Delicious Cakes & Sweet Treats</h3>
        <Link
          href="/about"
          className="px-6 py-3 bg-white text-black rounded-4xl font-semibold hover:bg-[#ff532c] hover:text-white transition duration-300"
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
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-6 z-30 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-white/70 hover:bg-[#e86e16] hover:text-white text-[#e86e16] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e86e16] focus:ring-offset-2"
        >
          <span className="text-lg">&#10094;</span>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-white/70 hover:bg-[#e86e16] hover:text-white text-[#e86e16] shadow-md rounded-full p-1 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#e86e16] focus:ring-offset-2"
        >
          <span className="text-lg">&#10095;</span>
        </button>
      </div>

      {/* Overlay for darker effect (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10"></div>
    </section>
  );
}
