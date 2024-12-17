import Link from "next/link";
import Image from "next/image";
import { Inter } from 'next/font/google';
import hero3 from '../public/hero3.jpg';

// Initialize the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const Hero = () => {
  return (
    <div>
      <section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center">
        {/* Background Image */}
        <Image
          src={hero3}
          alt="man-getting-haircut"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "75%" }}
          fill
          className="pointer-events-none select-none"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content Section */}
        <div className="relative z-10 pt-32 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl px-6 py-10 md:bg-white/10 rounded-lg backdrop-blur-lg shadow-xl flex flex-col gap-8">
            {/* Gradient Heading */}
           <h1
              className={`
                ${inter.className}
                text-4xl 
                md:text-6xl 
                font-black /* Boldest font-weight */
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-blue-400 
                via-blue-500 
                to-blue-600 
                animate-gradient-x 
                bg-[length:200%_auto] 
                leading-tight 
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] /* Drop shadow for emphasis */
              `}
            >
              SELF CARE <br /> FROM YOUR HOME.
            </h1>

            {/* Subtext */}
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Make your order now and enjoy premium service at home.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-6">
              <Link href="/appointment" passHref>
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-transform transform active:scale-95"
                >
                  Book an appointment
                </button>
              </Link>

              <Link href="/partner" passHref>
                <button
                  type="button"
                  className="bg-transparent border border-blue-500 text-white hover:bg-blue-500 hover:text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-transform transform active:scale-95"
                >
                  Become a care partner
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
