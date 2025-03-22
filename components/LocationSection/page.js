import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="relative text-white text-center py-24 px-5 overflow-hidden h-[400px] md:h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/h7.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          LET'S CELEBRATE!
        </h2>
        <p className="text-base md:text-xl font-normal mb-6">
          A cake makes every celebration sweeter. Whether you're planning a
          party or surprising someone with a treat, our custom cakes delivered
          straight to your door are the perfect way to add a little extra joy to
          every occasion.
        </p>
        <Link href="/contact">
          <button className="bg-[#ff532c] text-white text-sm md:px-5 md:py-2 px-3 py-1 rounded-4xl hover:bg-[#ff412cf4] transition duration-300">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
}
