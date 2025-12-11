
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import InvitationDetails from './components/InvitationDetails';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-rose-50 via-pink-50 to-amber-50 overflow-hidden">
      <FloatingHearts />
      <Hero scrollY={scrollY} />
      <Gallery />
      <InvitationDetails />
      <Footer />
    </div>
  );
}
