
import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const photos = [
    {
      url: `${import.meta.env.BASE_URL}gallery-1.jpg`,
      title: 'Cherished Moment 1'
    },
    {
      url: `${import.meta.env.BASE_URL}gallery-2.jpg`,
      title: 'Cherished Moment 2'
    },
    {
      url: `${import.meta.env.BASE_URL}gallery-3.jpg`,
      title: 'Cherished Moment 3'
    },
    {
      url: `${import.meta.env.BASE_URL}gallery-4.jpg`,
      title: 'Cherished Moment 4'
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-gradient-to-b from-transparent to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <i className="ri-camera-line text-2xl text-rose-400"></i>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-gray-800 mb-4">Cherished Moments</h2>
          <p className="text-lg text-gray-600">A glimpse into our beautiful journey together</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '8/7' }}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white">
                  <h3 className="font-serif text-xl mb-2">{photo.title}</h3>
                  <div className="flex items-center gap-2">
                    <i className="ri-heart-fill text-rose-300"></i>
                    <span className="text-sm">View Photo</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <i className="ri-close-line text-2xl text-white"></i>
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedImage].url}
              alt={photos[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="font-serif text-2xl text-white">{photos[selectedImage].title}</h3>
            </div>
          </div>

          {/* Navigation */}
          {selectedImage > 0 && (
            <button
              className="absolute left-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
            >
              <i className="ri-arrow-left-line text-2xl text-white"></i>
            </button>
          )}
          {selectedImage < photos.length - 1 && (
            <button
              className="absolute right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
            >
              <i className="ri-arrow-right-line text-2xl text-white"></i>
            </button>
          )}
        </div>
      )}
    </section>
  );
}
