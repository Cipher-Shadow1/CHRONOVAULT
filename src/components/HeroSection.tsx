import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWatch from '@/assets/hero-watch.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWatch} 
          alt="Luxury Watch" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg/80 via-luxury-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Animated Heading */}
          <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-luxury-text mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block">Own Time.</span>
            <span className="block text-champagne-gold">Master Precision.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-luxury-text-secondary mb-8 max-w-2xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Discover iconic watches crafted to perfection. Each timepiece tells a story of elegance, precision, and timeless sophistication.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button className="btn-luxury group">
              Explore Collections
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-ghost group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-champagne-gold">50+</div>
              <div className="text-luxury-text-muted">Years Heritage</div>
            </div>
            <div>
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-champagne-gold">1000+</div>
              <div className="text-luxury-text-muted">Timepieces</div>
            </div>
            <div>
              <div className="font-orbitron text-2xl md:text-3xl font-bold text-champagne-gold">99%</div>
              <div className="text-luxury-text-muted">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-champagne-gold to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;