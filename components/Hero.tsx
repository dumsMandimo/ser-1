// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import hero3 from '../public/hero3.jpg';

// Asset imports
import Placeholder from "@/public/hero1.jpg";

const Hero = () => {
  return (
    <div>
      <section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center">
        <Image
          src={hero3}
          alt="man-getting-haircut"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "75%" }}
          fill
          className="pointer-events-none select-none"
          priority
        />
        
        {/* Black tint overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 pt-32 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto">
          <div className="max-w-2xl px-4 flex flex-col gap-8 md:max-xl:bg-white/30 md:max-xl:rounded-lg">
            <h1 className="ml-10 text-5xl md:text-7xl font-semibold text-blue-500">
              Self care from the comfort of your home.
            </h1>
            <p className="ml-10 text-white text-lg max-w-xl">
              Make your order now and enjoy premium service at home.
            </p>
            <div className=" ml-10 flex gap-8 font-semibold mt-4">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg active:scale-95 hover:bg-blue-400 transition"
              >
                Book an appointment
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg active:scale-95 hover:bg-blue-400 transition"
              >
                Become a care partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
