import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-surface/50 backdrop-blur-xl border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="font-serif text-3xl font-bold text-champagne-gold mb-6">
              CHRONOVAULT
            </div>
            <p className="text-luxury-text-secondary mb-8 max-w-md leading-relaxed">
              Crafting exceptional timepieces since 1973. Each watch represents our 
              commitment to precision, elegance, and timeless design.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-luxury-text-secondary">
                <MapPin className="w-5 h-5 mr-3 text-champagne-gold" />
                <span>123 Luxury Ave, Geneva, Switzerland</span>
              </div>
              <div className="flex items-center text-luxury-text-secondary">
                <Phone className="w-5 h-5 mr-3 text-champagne-gold" />
                <span>+41 22 123 4567</span>
              </div>
              <div className="flex items-center text-luxury-text-secondary">
                <Mail className="w-5 h-5 mr-3 text-champagne-gold" />
                <span>hello@chronovault.com</span>
              </div>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-luxury-text mb-6">
              Collections
            </h3>
            <ul className="space-y-3">
              {['Modern Elegance', 'Chronograph Sports', 'Luxury Classics', 'Limited Editions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-luxury-text-secondary hover:text-champagne-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-luxury-text mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Heritage', 'Craftsmanship', 'Press', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-luxury-text-secondary hover:text-champagne-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-luxury-text mb-4">
              Stay in Time
            </h3>
            <p className="text-luxury-text-secondary mb-8">
              Subscribe to receive updates on new collections, exclusive events, and horological insights.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-luxury-surface border border-white/20 rounded-l-2xl text-luxury-text placeholder-luxury-text-muted focus:outline-none focus:border-champagne-gold"
              />
              <button className="px-8 py-4 bg-champagne-gold text-luxury-bg font-semibold rounded-r-2xl hover:bg-satin-silver transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-luxury-text-muted text-sm mb-4 md:mb-0">
            © 2024 Chronovault. All rights reserved. Crafted with precision.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Facebook, href: '#' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-luxury-text-secondary hover:text-champagne-gold transition-colors magnetic"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;