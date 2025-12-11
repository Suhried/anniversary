
import { useEffect, useState } from 'react';
import HandwritingHeading from './HandwritingHeading';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={`${import.meta.env.BASE_URL}hero-image.jpg`}
          alt="Shanto & Ayanty - Romantic celebration"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 10%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-pink-900/30 to-amber-900/40"></div>
      </div>

      {/* Animated Ring Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-96 h-96 rounded-full border-2 border-rose-300/30 animate-ping-slow"></div>
        <div className="absolute w-80 h-80 rounded-full border-2 border-pink-300/40 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Top Element */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <i className="ri-heart-3-fill text-3xl text-rose-300 animate-heartbeat"></i>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
        </div>

        {/* Names */}
        <div className="mb-4">
          <HandwritingHeading text="Shanto ❤️ Ayanty" className="" mobileStack={true} />
        </div>

        {/* Subtitle */}
        <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl text-rose-100 font-light mb-2">Celebrating Our</p>
          <p className="text-3xl md:text-4xl text-white font-serif">Marriage Anniversary</p>
        </div>

        {/* Date Badge */}
        <div className={`mt-12 inline-block transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="bg-white/10 backdrop-blur-md border border-rose-200/30 rounded-full px-8 py-4">
            <p className="text-rose-100 text-lg">15th December 2025</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 animate-bounce-slow">
            <p className="text-rose-200 text-sm">Scroll to explore</p>
            <i className="ri-arrow-down-line text-2xl text-rose-300"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
