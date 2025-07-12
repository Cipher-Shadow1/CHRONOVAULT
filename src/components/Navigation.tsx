import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="font-serif text-2xl md:text-3xl font-bold text-champagne-gold">
          CHRONOVAULT
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#collections" className="luxury-body hover:text-champagne-gold transition-colors">
            Collections
          </a>
          <a href="#about" className="luxury-body hover:text-champagne-gold transition-colors">
            Heritage
          </a>
          <a href="#contact" className="luxury-body hover:text-champagne-gold transition-colors">
            Contact
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="magnetic hover:text-champagne-gold">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="magnetic hover:text-champagne-gold relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-champagne-gold text-luxury-bg text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
          
          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden magnetic"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-0 border-t border-white/8 mt-4">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="#collections" className="block luxury-body hover:text-champagne-gold transition-colors">
              Collections
            </a>
            <a href="#about" className="block luxury-body hover:text-champagne-gold transition-colors">
              Heritage
            </a>
            <a href="#contact" className="block luxury-body hover:text-champagne-gold transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;