
export default function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-rose-100 to-pink-100 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-10 left-20 w-2 h-2 bg-rose-300 rounded-full animate-twinkle"></div>
      <div className="absolute top-20 right-32 w-2 h-2 bg-pink-300 rounded-full animate-twinkle animation-delay-500"></div>
      <div className="absolute bottom-20 left-40 w-2 h-2 bg-rose-300 rounded-full animate-twinkle animation-delay-1000"></div>
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-pink-300 rounded-full animate-twinkle animation-delay-1500"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-3 mb-6">
            <i className="ri-heart-fill text-3xl text-rose-400 animate-heartbeat"></i>
            <i className="ri-heart-fill text-3xl text-pink-400 animate-heartbeat animation-delay-300"></i>
            <i className="ri-heart-fill text-3xl text-rose-400 animate-heartbeat animation-delay-600"></i>
          </div>
          
          <h3 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            We Can't Wait to Celebrate Love with You
          </h3>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your presence will make our anniversary celebration even more special. 
            Join us as we cherish the beautiful journey we've shared together.
          </p>
        </div>

        {/* Couple Names */}
        <div className="mb-8">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-8 py-3 border border-rose-200/50">
            <p className="font-serif text-2xl text-gray-700">
              Shanto <span className="text-rose-400 mx-2">&</span> Ayanty
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
          <i className="ri-heart-line text-rose-400"></i>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
        </div>

        {/* Date Reminder */}
        <div className="mb-8">
          <p className="text-gray-600 mb-2">Save the Date</p>
          <p className="font-semibold text-2xl text-rose-600">15th December 2025</p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-rose-200/50">
          <p className="text-sm text-gray-500">
            Made with <i className="ri-heart-fill text-rose-400 mx-1"></i> for our special day
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors duration-300">
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
