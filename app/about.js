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
    </div>
  );
};

export default about;
