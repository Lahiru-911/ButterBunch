import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white text-center py-12 px-5">
      <div className="max-w-screen-lg mx-auto">
        {/* Logo */}
        <Image
          src="/logo.png" // Ensure the image is in your public/images folder
          alt="Thamaravila Logo"
          width={200}
          height={50}
          className="mb-5 mx-auto"
        />
        
        {/* Address */}
        <p className="text-base mb-2">
          Thamaravila Resort, Rookada Weva Road Horuwila, Wilpattu-20850
        </p>

        {/* Phone */}
        <p className="text-base mb-2">
          Tel:{" "}
          <a href="tel:+9471948898" className="text-white hover:text-[#C1932D]">
            +94 71 94 88 98
          </a>
        </p>

        {/* Email */}
        <p className="text-base mb-5">
          Email:{" "}
          <a
            href="mailto:reservations@thamaravila.com"
            className="text-[#C1932D] hover:text-[#b67d29] transition duration-300"
          >
            reservations@thamaravila.com
          </a>
        </p>

        {/* Copyright */}
        <p className="text-sm mb-5">© 2025 Thamaravila Resort - Wilpattu.</p>

        {/* Social Icons */}
        <div className="mt-5 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/thamaravilawilpattu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fb.png" // Ensure the image is in your public/images folder
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/thamaravila_wilpattu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/inst.png" // Ensure the image is in your public/images folder
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g3186994-d17768551-Reviews-Thamaravila_Wilpattu_Luxury_Tented_Safari_Villas-Wilpattu_National_Park_North_Wester.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/yt.png" // Ensure the image is in your public/images folder
              alt="YouTube"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
