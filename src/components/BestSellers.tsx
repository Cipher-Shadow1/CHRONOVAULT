import { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const watches = [
  {
    id: 1,
    name: 'Chronos Elite Gold',
    price: 2899,
    originalPrice: 3299,
    image: '/api/placeholder/300/300',
    category: 'Luxury Classic',
    rating: 4.9,
    reviews: 127,
    tags: ['Top Rated', 'Best Seller'],
    features: ['Swiss Movement', '18K Gold', 'Sapphire Crystal']
  },
  {
    id: 2,
    name: 'Velocity Sport Pro',
    price: 1799,
    image: '/api/placeholder/300/300',
    category: 'Chronograph Sports',
    rating: 4.8,
    reviews: 89,
    tags: ['New Arrival', 'Water Resistant'],
    features: ['Titanium Case', 'Ceramic Bezel', '300m Water Resistant']
  },
  {
    id: 3,
    name: 'Prestige Platinum',
    price: 4599,
    image: '/api/placeholder/300/300',
    category: 'Limited Edition',
    rating: 5.0,
    reviews: 45,
    tags: ['Limited Edition', "Collector's Pick"],
    features: ['Platinum Case', 'Numbered Edition', 'Hand Assembled']
  },
  {
    id: 4,
    name: 'Heritage Classic',
    price: 1299,
    image: '/api/placeholder/300/300',
    category: 'Modern Elegance',
    rating: 4.7,
    reviews: 203,
    tags: ['Bestseller', 'Classic'],
    features: ['Automatic Movement', 'Leather Strap', 'Date Display']
  }
];

const BestSellers = () => {
  const [hoveredWatch, setHoveredWatch] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-luxury-surface/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-text mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
            Discover our most coveted timepieces, loved by collectors worldwide
          </p>
        </div>

        {/* Watches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {watches.map((watch, index) => (
            <div
              key={watch.id}
              className={`luxury-card glass-card rounded-2xl overflow-hidden group scroll-reveal transition-all duration-500 ${
                hoveredWatch === watch.id ? 'transform -translate-y-4' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredWatch(watch.id)}
              onMouseLeave={() => setHoveredWatch(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-luxury-surface to-luxury-bg-secondary overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 space-y-2">
                  {watch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="block px-3 py-1 bg-champagne-gold text-luxury-bg text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 space-y-2 transition-all duration-300 ${
                  hoveredWatch === watch.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <Button variant="ghost" size="icon" className="w-10 h-10 glass-card hover:bg-white/10">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-10 h-10 glass-card hover:bg-white/10">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Buy Button */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredWatch === watch.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button className="w-full btn-luxury text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Quick Buy
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-champagne-gold font-medium">
                    {watch.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-luxury-text mb-2">
                  {watch.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(watch.rating)
                            ? 'text-champagne-gold fill-current'
                            : 'text-luxury-text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-luxury-text-secondary">
                    {watch.rating} ({watch.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="mb-4 space-y-1">
                  {watch.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-luxury-text-muted">
                      <div className="w-1 h-1 bg-champagne-gold rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-orbitron text-xl font-bold text-luxury-text">
                      ${watch.price.toLocaleString()}
                    </span>
                    {watch.originalPrice && (
                      <span className="ml-2 text-sm text-luxury-text-muted line-through">
                        ${watch.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {watch.originalPrice && (
                    <span className="px-2 py-1 bg-rose-gold/20 text-rose-gold text-xs font-semibold rounded">
                      Save ${(watch.originalPrice - watch.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 scroll-reveal">
          <Button className="btn-ghost">
            View All Timepieces
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;