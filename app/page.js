import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider/page";
import React from "react";
import LocationSection from "@/components/LocationSection/page";

const Home = () => {
  const services = [
    {
      title: "Luxury Tented Chalets",
      description:
        "Thamaravila Wilpattu hosts a collection of 5 luxury tented Chalets of 1000sqft each built on stilts, featuring natural thatched roofs and open-air wooden decks with serene views of nature and wildlife.",
      image: "/service1.jpg",
      link: "/services",
    },
    {
      title: "Cuisine",
      description:
        "Thamaravila Wilpattu offers a range of bespoke dining options with cuisines ranging from traditional Sri Lankan cuisine to international cuisine depending on guest preference.",
      image: "/service2.jpg",
      link: "/services",
    },
    {
      title: "Game Drives",
      description:
        "There are two daily game drives at Thamaravila Wilpattu, one leaving early in the morning and one in the late afternoon, each lasting around three to four hours.",
      image: "/service3.jpg",
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

      <LocationSection />

      <section className="max-w-[1200px] mx-auto px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#C1932D] mb-10">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden max-w-[350px] flex flex-col"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#C1932D] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-5 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block mt-auto px-5 py-2 bg-[#C1932D] text-white rounded hover:bg-black hover:text-[#C1932D] transition duration-300"
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
