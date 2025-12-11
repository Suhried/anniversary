
import { useEffect, useRef, useState } from 'react';

export default function InvitationDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Impetus+Lounge+Impetus+Center+Rooftop+242%2FB+Bir+Uttam+Mir+Shawkat+Sarak+Gulshan+Tejgaon+Link+Road+Dhaka+1208', '_blank');
  };

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-pink-50/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <i className="ri-calendar-heart-line text-2xl text-rose-400"></i>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-4">Join Our Celebration</h2>
          <p className="text-lg text-gray-600">We would be honored by your presence</p>
        </div>

        {/* Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Date Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="ri-calendar-event-line text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-3">Date</h3>
              <p className="text-3xl font-semibold text-rose-500 mb-2">15</p>
              <p className="text-lg text-gray-600">December 2025</p>
              <p className="text-sm text-gray-500 mt-2">Sunday</p>
            </div>
          </div>

          {/* Time Card */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-3">Time</h3>
              <p className="text-3xl font-semibold text-rose-500 mb-2">6:30 PM</p>
              <p className="text-lg text-gray-600">Onwards</p>
              <p className="text-sm text-gray-500 mt-2">Evening Celebration</p>
            </div>
          </div>

          {/* Venue Card */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 text-center group hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-3">Venue</h3>
              <p className="text-lg font-semibold text-rose-500 mb-2">Impetus Lounge</p>
              <p className="text-sm text-gray-600">Impetus Center (Rooftop)</p>
              <p className="text-sm text-gray-600">242/B Bir Uttam Mir Shawkat Sarak</p>
              <p className="text-sm text-gray-600">Gulshan-Tejgaon Link Road</p>
            </div>
          </div>
        </div>

        {/* Venue Details */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-white to-rose-50/50 rounded-2xl p-10 shadow-xl border border-rose-200/50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Map Preview */}
              <div className="flex-1 w-full">
                <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer" onClick={handleMapClick}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0!2d90.4!3d23.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzQ4LjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                  <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-transparent transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>

              {/* Address Details */}
              <div className="flex-1 w-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-rose-100 rounded-full flex-shrink-0">
                    <i className="ri-building-line text-xl text-rose-500"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">Impetus Lounge</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Impetus Center (Rooftop)<br />
                      242/B Bir Uttam Mir Shawkat Sarak<br />
                      Gulshan-Tejgaon Link Road<br />
                      Dhaka-1208
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleMapClick}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl whitespace-nowrap group"
                >
                  <i className="ri-map-pin-fill text-xl group-hover:animate-bounce"></i>
                  <span>Get Directions</span>
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                </button>

                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <i className="ri-parking-line text-rose-400"></i>
                    <span>Parking Available</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <i className="ri-restaurant-line text-rose-400"></i>
                    <span>Dinner Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-3">
          <i className="ri-heart-fill text-rose-300 text-xl animate-pulse"></i>
          <i className="ri-heart-fill text-pink-300 text-xl animate-pulse animation-delay-300"></i>
          <i className="ri-heart-fill text-rose-300 text-xl animate-pulse animation-delay-600"></i>
        </div>
      </div>
    </section>
  );
}
