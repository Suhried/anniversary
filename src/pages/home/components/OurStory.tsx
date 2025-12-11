
import { useEffect, useRef, useState } from 'react';

export default function OurStory() {
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

  const timeline = [
    {
      year: 'First Meeting',
      title: 'When Our Eyes Met',
      description: 'Two hearts found each other in the most unexpected moment, and everything changed forever.',
      icon: 'ri-heart-add-line'
    },
    {
      year: 'The Proposal',
      title: 'A Promise of Forever',
      description: 'Under the stars, a question was asked, and with tears of joy, a beautiful journey began.',
      icon: 'ri-gift-line'
    },
    {
      year: 'Our Wedding',
      title: 'Two Souls, One Heart',
      description: 'Surrounded by love and blessings, we vowed to walk together through every season of life.',
      icon: 'ri-heart-3-fill'
    },
    {
      year: 'Today',
      title: 'Still Falling in Love',
      description: 'Every day with you is a new adventure, and our love grows stronger with each passing moment.',
      icon: 'ri-infinity-line'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <i className="ri-heart-line text-2xl text-rose-400"></i>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-4">Our Love Story</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of two hearts that found their home in each other
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-rose-200 via-pink-300 to-rose-200 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-rose-100">
                      <p className="text-rose-400 font-semibold mb-2">{item.year}</p>
                      <h3 className="font-serif text-2xl text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                      <i className={`${item.icon} text-2xl text-white`}></i>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-10 border border-rose-200/50">
            <i className="ri-double-quotes-l text-4xl text-rose-300 mb-4 inline-block"></i>
            <p className="font-serif text-2xl text-gray-700 italic leading-relaxed">
              "In you, I've found the love of my life and my closest, truest friend."
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <i className="ri-heart-fill text-rose-400"></i>
              <i className="ri-heart-fill text-pink-400"></i>
              <i className="ri-heart-fill text-rose-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
