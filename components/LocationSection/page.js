import Image from "next/image";
import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="relative text-white text-center py-24 px-5 overflow-hidden h-[600px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img3.jpg"
          alt="Wilpattu National Park"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Location</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Thamaravila Wilpattu is located within 4.3km (10mins drive) to the entrance of the Wilpattu National Park.
        </h3>
        <p className="text-lg mb-8">
          The resort is approximately 157km from the Bandaranaike International Airport and 34km from the sacred city
          Anuradhapura.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 border border-white text-white font-semibold hover:bg-[#b67d29] transition duration-300"
        >
          GALLERY →
        </Link>
      </div>
    </section>
  );
}
