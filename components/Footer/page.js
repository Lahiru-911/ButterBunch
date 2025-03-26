import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#323232] text-gray-300 py-8 px-8 sm:px-6 md:px-12 mt-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4">
          <div className="mb-2">
            <Image
              src="/logo.png"
              alt="Butter Bunch Logo"
              width={150}
              height={40}
            />
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            At Butter Bunch, we create delicious cakes with love. Join us in celebrating life's sweetest moments!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/butterbunch" target="_blank" rel="noopener noreferrer">
              <Image
                src="/fb.png"
                alt="Facebook"
                width={30}
                height={30}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com/butterbunch" target="_blank" rel="noopener noreferrer">
              <Image
                src="/inst.png"
                alt="Instagram"
                width={30}
                height={30}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a href="https://www.pinterest.com/butterbunch" target="_blank" rel="noopener noreferrer">
              <Image
                src="/yt.png"
                alt="Pinterest"
                width={30}
                height={30}
                className="transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white text-lg font-semibold mb-2">Company</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-[#ff532c] cursor-pointer">Home</li>
            <li className="hover:text-[#ff532c] cursor-pointer">Products</li>
            <li className="hover:text-[#ff532c] cursor-pointer">About Us</li>
            <li className="hover:text-[#ff532c] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-white text-lg font-semibold mb-2">Get in Touch</h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              Phone:
              <span className="hover:text-[#ff532c] cursor-pointer"> +94 71 94 88 98</span>
            </li>
            <li>
              Email:
              <a href="mailto:info@butterbunch.com" className="hover:text-[#ff532c] cursor-pointer">
                info@butterbunch.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-6 border-gray-500" />
      <p className="text-center text-xs sm:text-sm text-gray-50">
        &copy; 2025 Butter Bunch Bakery. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
