import React from "react";

const about = () => {
  return (
    <div>
      <div
        className="full-width-section"
        style={{
          backgroundImage: "url('/about.jpg')",
        }}
      >
        <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-center text-white text-4xl font-bold shadow-lg">
          About Thamaravila Wilpattu
        </div>
      </div>

      <div className="container w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="flex items-center justify-between mb-16">
          <img
            src="/about1.jpg"
            alt="About Us"
            className="w-[45%] rounded-lg h-[600px]"
          />
          <div className="text-box w-[50%]">
            <h2 className="text-[#C1932D] text-3xl">Our Story</h2>
            <p className="text-lg mb-5">
              Thamaravila Wilpattu is a premier eco-friendly resort nestled in
              the heart of Sri Lanka’s famous Wilpattu National Park. Our
              mission is to offer guests an unparalleled wildlife experience,
              with a focus on sustainability, luxury, and comfort. We provide an
              idyllic escape from city life, where nature and serenity meet to
              create the perfect retreat for relaxation and adventure.
            </p>
            <p className="text-lg mb-5">
              Our resort features top-tier accommodations, bespoke dining
              options, and exciting game drives that allow guests to connect
              with nature while experiencing the richness of Sri Lanka’s
              biodiversity.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#f9f9f9] text-center">
        <h2 className="text-[#C1932D] text-3xl">Conserve the Earth!</h2>
        <p className="text-lg text-[#555] max-w-[800px] mx-auto mt-4">
          Thamaravila Wilpattu, a nature-sensitive lodge located close to the
          National Park, has taken a serious stance on environmental
          sustainability.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10 max-w-[1200px] mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md w-[280px] flex flex-col">
            <img
              src="/s1.jpg"
              alt="Planting Trees"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-[#C1932D]">Planting Trees</h3>
              <p className="text-lg text-[#555]">
                We plant trees like Mee, Kumbuk, Madam, Nelli, and Thibiri,
                which serve as natural air purifiers and habitats for wildlife.
                Guests can participate in this initiative by planting trees
                themselves.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md w-[280px] flex flex-col">
            <img
              src="/s2.jpg"
              alt="Rain Water Harvesting"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-[#C1932D]">Rain Water Harvesting</h3>
              <p className="text-lg text-[#555]">
                We use rainwater harvested on-site, reducing soil erosion and
                carbon emissions. This system provides 5000L of water daily,
                ensuring sustainable water use at the lodge.
              </p>
            </div>
          </div>

          {/* Add more cards here... */}
        </div>
      </div>

      <div className="container w-[90%] max-w-[1200px] mx-auto py-16 text-center">
        <h2 className="text-[#C1932D] text-3xl mb-10">Our Gallery</h2>
        <div className="flex flex-wrap justify-center gap-5">
          <img
            src="/g1.jpg"
            alt="Gallery Image 1"
            className="w-[calc(25%-20px)] h-[350px] rounded-lg"
          />
          <img
            src="/g2.jpg"
            alt="Gallery Image 2"
            className="w-[calc(25%-20px)] h-[350px] rounded-lg"
          />
          <img
            src="/g3.jpg"
            alt="Gallery Image 3"
            className="w-[calc(25%-20px)] h-[350px] rounded-lg"
          />
          {/* Add more images as needed */}
        </div>
      </div>

      <div className="container w-[90%] max-w-[1200px] mx-auto py-16">
        <h2 className="text-[#C1932D] text-3xl text-center mb-10">
          What Our Guests Say
        </h2>
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="flex-1 min-w-[300px] max-w-[32%] bg-[#f9f9f9] p-5 rounded-lg shadow-md">
            <p className="text-lg text-[#333]">
              "The stay at Thamaravila Wilpattu was a dream come true..."
            </p>
            <p className="font-bold text-[#C1932D]">John D.</p>
            <p className="italic text-[#777]">Traveler from UK</p>
          </div>
          <div className="flex-1 min-w-[300px] max-w-[32%] bg-[#f9f9f9] p-5 rounded-lg shadow-md">
            <p className="text-lg text-[#333]">
              "A perfect getaway! The staff was welcoming..."
            </p>
            <p className="font-bold text-[#C1932D]">Sarah W.</p>
            <p className="italic text-[#777]">Traveler from Canada</p>
          </div>
          {/* Add more testimonial cards */}
        </div>
      </div>
    </div>
  );
};

export default about;
