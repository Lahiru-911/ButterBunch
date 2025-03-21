import React from "react";

const services = () => {
  return (
    <div>
      <div
        className="w-full h-[500px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/serviceHero.jpg')" }}
      >
        <div className="flex items-center justify-center h-full text-center text-white text-3xl font-bold shadow-lg">
          OUR SERVICES
        </div>
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="flex items-center justify-between mb-16">
          <img
            src="/charlet.jpg"
            alt="Luxury Tented Chalets"
            className="w-[45%] rounded-xl"
          />
          <div className="w-[50%]">
            <h2 className="text-[#C1932D] text-2xl">Luxury Tented Chalets</h2>
            <p className="text-lg mb-5">
              Thamaravila Wilpattu hosts a collection of 5 luxury tented Chalets
              of 1000sqft each...
            </p>
            <p className="text-lg mb-5">
              Each Chalet is offered on an “All Inclusive with Game Drive”
              basis...
            </p>
            <p className="text-lg mb-5">
              The exteriors are designed to blend with the jungle whilst the
              interiors...
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-[#C1932D] text-white text-lg font-bold rounded-lg hover:bg-black hover:text-[#C1932D]"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <img
            src="/charlet2.jpg"
            alt="Luxury Chalet"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/charlet3.jpg"
            alt="Luxury Chalet"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/charlet4.jpg"
            alt="Luxury Chalet"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/charlet1.jpg"
            alt="Luxury Chalet"
            className="w-full h-[300px] rounded-xl"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        <div className="flex items-center justify-between mb-16">
          <div className="w-[50%]">
            <h2 className="text-[#C1932D] text-2xl">Cuisine</h2>
            <p className="text-lg mb-5">
              Thamaravila Wilpattu offers a range of bespoke dining options...
            </p>
          </div>
          <img
            src="/dining.jpg"
            alt="Cuisine"
            className="w-[45%] rounded-xl h-[600px]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <img
            src="/dining1.jpg"
            alt="Dining"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/dining2.jpg"
            alt="Dining"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/dining3.jpg"
            alt="Dining"
            className="w-full h-[300px] rounded-xl"
          />
          <img
            src="/dining4.jpg"
            alt="Dining"
            className="w-full h-[300px] rounded-xl"
          />
        </div>
      </div>

      <div>
      {/* Game Drives Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center bg-fixed flex items-center justify-center text-center text-white text-3xl font-bold shadow-lg"
        style={{ backgroundImage: "url('/game.jpg')" }}
      >
        Just ask your ranger!
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto py-16">
        {/* Game Drives Section with white background */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/game1.jpg"
            alt="Game Drives"
            className="w-full md:w-[45%] rounded-xl mb-8 md:mb-0"
          />
          <div className="w-full md:w-[50%]">
            <h2 className="text-[#C1932D] text-2xl">Game Drives</h2>
            <p className="text-lg mb-5">
              There are two daily game drives at Thamaravila Wilpattu, one leaving early in the morning and one leaving late afternoon, each lasting around three to four hours.
              Full-day game-drive of Wilpattu National Park can be arranged on your choice. Your dedicated ranger will tailor the game drive for you.
            </p>
          </div>
        </div>

        {/* Morning Drives Section with white background */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="w-full md:w-[50%]">
            <h3 className="text-[#C1932D]">Morning Drives</h3>
            <p className="text-lg mb-5">
              You might not be a morning person, but it’s certainly worth getting out of bed for this. Your ranger will meet you at first light (05:30-06:00am).
            </p>
            <p className="text-lg mb-5">
              This is the best time to spot wildlife, as animals are still active, including leopards returning from a night of hunting.
            </p>
          </div>
          <img
            src="/game2.jpg"
            alt="Morning Drives"
            className="w-full md:w-[45%] rounded-xl h-[300px] mb-8 md:mb-0"
          />
        </div>

        {/* Afternoon Drives Section with white background */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 bg-white p-8 rounded-lg shadow-lg">
          <img
            src="/game3.jpg"
            alt="Afternoon Drives"
            className="w-full md:w-[45%] rounded-xl h-[300px] mb-8 md:mb-0"
          />
          <div className="w-full md:w-[50%]">
            <h3 className="text-[#C1932D]">Afternoon Drives</h3>
            <p className="text-lg mb-5">
              There is something special about the wild as the late afternoon light starts to fade. Animals start to mingle from their daytime slumber, and the predators start trailing their targets.
            </p>
            <h3 className="text-[#C1932D]">5 Tips to Make the Game Drive Your Own</h3>
            <ul className="list-disc ml-5 text-lg mb-5">
              <li>Do not bring your mobile phone.</li>
              <li>Leave your mobile phones behind to keep calm the wild.</li>
              <li>Take binoculars (we provide a pair on each game drive, but bring your own if you have them).</li>
              <li>Bring a good camera.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default services;
