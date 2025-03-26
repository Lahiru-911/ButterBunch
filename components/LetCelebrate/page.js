import Link from "next/link";

export default function LetCelebrate() {
  return (
    <section className="relative text-white text-center py-24 px-5 overflow-hidden h-[600px] md:h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/h7.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col justify-center items-center h-full px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide animate-fade-in">
          Let&#39;s Celebrate!
        </h2>
        <p className="text-lg md:text-xl font-light mb-8 leading-relaxed animate-fade-in delay-150">
          A cake makes every celebration sweeter. Whether you're planning a
          party or surprising someone with a treat, our custom cakes—delivered
          straight to your door—are the perfect way to add a little extra joy to
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
