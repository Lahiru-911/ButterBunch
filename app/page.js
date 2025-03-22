import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider/page";
import React from "react";
import LetCelebrate from "@/components/LetCelebrate/page";

const Home = () => {
  // Define services array for dynamic product rendering
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
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto px-5 py-20">
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
            className="inline-block hover:text-white bg-[#ff532c] text-white text-sm md:px-5 md:py-2 px-3 py-1 rounded-4xl hover:bg-[#ff412cf4] transition duration-300"
          >
            Products →
          </Link>
        </div>

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

      {/* Let Celebrate Section */}
      <LetCelebrate />

      {/* Main Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff532c] mb-4 tracking-tight">
          Our Main Products
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed">
          Handcrafted Cakes for Every Occasion — Delivered Fresh to Your
          Doorstep!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-[#ff532c] mb-4 group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow leading-relaxed text-justify">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-block mt-auto px-4 py-3 bg-[#ff532c] text-white font-medium text-sm rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff532c] focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="relative w-full text-white py-16 md:py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/o1.jpg"
            alt="Exclusive Offers Background"
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto bg-white/60 p-6 md:p-10 text-center rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-5 sm:text-4xl lg:text-5xl">
            Sweet Deals Just for You
          </h2>
          <p className="text-lg leading-relaxed mb-8 sm:text-xl text-black text-justify">
            Treat yourself to our exclusive cake offers! From custom birthday
            creations to elegant wedding cakes, enjoy special discounts and
            personalized designs to make your celebrations even more memorable.
            Don’t miss out on these limited-time offers!
          </p>

          <Link
            href="https://www.facebook.com/thamaravilawilpattu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff532c] text-white text-sm md:text-base px-4 py-2 rounded-4xl hover:bg-[#ff412cf4] transition duration-300"
          >
            View Offers
          </Link>
        </div>
      </section>

      {/* Sustainability Practices Section */}
      <section className="max-w-screen-xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-[#ff532c] mb-12 sm:text-4xl lg:text-5xl">
          Sustainable Baking Practices
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src="/o2.jpg"
              alt="Sustainability"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex justify-center items-center">
            <p className="text-base sm:text-lg lg:text-xl text-[#333] leading-relaxed max-w-lg mx-auto">
              At <span className="font-semibold">Butter Bunch</span>, we believe
              that every sweet treat should be made with love and care for the
              planet. That's why we prioritize sustainable ingredients,
              eco-friendly packaging, and waste reduction in every step of our
              baking process. Enjoy our delicious cakes, knowing you're making a
              positive impact!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
