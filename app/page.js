import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider/page";
import React from "react";
import LetCelebrate from "@/components/LetCelebrate/page";

const Home = () => {
  const services = [
    {
      title: "Custom Birthday Cakes",
      description:
        "Celebrate with our handcrafted custom cakes, made with the finest ingredients and designed to match your style. Whether it’s a grand party or intimate gathering, each cake is freshly baked and delivered to make your birthday unforgettable.",
      image: "/i1.jpg",
      link: "/services",
    },
    {
      title: "Wedding & Anniversary Cakes",
      description:
        "Make your special day even sweeter with our custom wedding and anniversary cakes. Crafted with love and the finest ingredients, each cake is designed to match your unique style and celebrate your love story. Freshly baked and elegantly delivered to make your moments unforgettable.",
      image: "/i2.jpg",
      link: "/services",
    },
    {
      title: "Cupcakes & Treat Boxes",
      description:
        "Delight your guests with our delicious cupcakes and treat boxes, perfect for any occasion. Made with the finest ingredients and beautifully decorated, each bite offers a sweet touch of joy. Freshly baked and ready to brighten any celebration.",
      image: "/i3.jpg",
      link: "/services",
    },
  ];

  return (
    <div>
      <HeroSlider />

      <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto px-5 py-20">
        {/* Left Side (Text) */}
        <div className="flex-1 md:pr-10 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ff532c] mb-4">
            Butter Bunch Cakes
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 text-justify">
            Butter Bunch Cakes is a specialty bakery that brings sweet moments
            to life with beautifully handcrafted cakes and confections. Founded
            out of a love for baking and a passion for creativity, Butter Bunch
            Cakes has become a go-to destination for those seeking cakes that
            are as stunning as they are delicious.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 text-justify">
            Our journey began in a cozy home kitchen where timeless family
            recipes were reimagined into delightful treats. Today, Butter Bunch
            Cakes offers a wide range of custom cakes, cupcakes, and desserts
            that are perfect for weddings, birthdays, and every special occasion
            in between.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4 text-justify">
            At Butter Bunch Cakes, we believe in quality without compromise.
            That’s why we use only the finest ingredients—real butter,
            farm-fresh eggs, and locally sourced flavors—to create desserts that
            leave a lasting impression with every bite. Whether you're
            celebrating a milestone or simply indulging a sweet tooth, Butter
            Bunch Cakes is here to craft the perfect cake for your special day.
            Let us be part of your sweetest moments!
          </p>

          <Link
            href="/services"
            className="inline-block px-4 py-1 text-sm border border-[#e86e16] text-black font-semibold hover:bg-[#e86e16] hover:text-white transition duration-300 rounded-4xl"
          >
            Products →
          </Link>
        </div>
        {/* Right Side (Video) */}
        <div className="flex-1 mt-16 ">
          <video
            src="/g.mp4"
            autoPlay
            muted
            loop
            className="w-full h-auto rounded-lg shadow-[#e86e16] outline-1 outline-[#e86e16] shadow-md"
          />
        </div>
      </section>

      <LetCelebrate />

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff532c] mb-4 tracking-tight">
          Our Main Products
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">
          Handcrafted Cakes for Every Occasion — Delivered Fresh to Your
          Doorstep!
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-[#ff532c] mb-4 group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={service.link}
                  className="inline-block mt-auto px-6 py-3 bg-[#ff532c] text-white font-medium text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff532c] focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full text-white py-[100px] px-5 overflow-hidden">
        {/* Next.js Image as background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/offers.jpg" // Make sure the image exists in the public/images directory
            alt="Exclusive Offers Background"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
          />
          {/* Optional overlay for darkening */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[900px] mx-auto bg-black/60 p-10 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-[#C1932D] mb-5">
            Exclusive Offers
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Experience luxury at Thamaravila Wilpattu with our special offers!
            Enjoy a secluded getaway with exclusive discounts, personalized
            services, and unforgettable wildlife adventures.
          </p>

          <Link
            href="https://www.facebook.com/thamaravilawilpattu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#C1932D] text-white text-lg font-bold rounded hover:bg-black hover:text-[#C1932D] transition duration-300"
          >
            View Offers
          </Link>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto py-20 px-5 text-center">
        <h2 className="text-3xl font-bold text-[#C1932D] mb-10">
          Sustainability
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {/* Sustainability Image */}
          <div className="flex-1 max-w-[500px]">
            <Image
              src="/sustainability.jpg" // Ensure the image is in your public/images folder
              alt="Sustainability"
              width={500}
              height={350}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Sustainability Content */}
          <div className="flex-1 max-w-[500px] text-left">
            <h3 className="text-xl font-semibold text-[#C1932D] mb-3">
              Nature-Sensitive Lodge
            </h3>
            <p className="text-base text-[#333] leading-relaxed">
              Thamaravila Wilpattu, as a nature-sensitive lodge located close to
              the National Park, has taken serious measures towards
              environmental sustainability.
            </p>

            <h3 className="text-lg font-semibold text-[#C1932D] mt-8 mb-3">
              Avoid Plastic
            </h3>
            <p className="text-base text-[#333] leading-relaxed">
              We provide reusable glass bottles in guest rooms for drinking
              water. We do not provide disposable toiletry items in guest
              bathrooms. All the bottles are refilled with Authentic Ceylonese
              products provided by a locally based supplier committed to
              sustainability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
