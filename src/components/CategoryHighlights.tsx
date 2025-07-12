import { useState } from 'react';
import { ArrowRight, Clock, Zap, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'modern',
    title: 'Modern Elegance',
    description: 'Sleek minimalist designs, perfect for business or formal wear.',
    icon: Clock,
    gradient: 'from-satin-silver/20 to-champagne-gold/10',
    features: ['Titanium Cases', 'Sapphire Crystal', 'Swiss Movement']
  },
  {
    id: 'sports',
    title: 'Chronograph Sports',
    description: 'Rugged, water-resistant, with stopwatch functionality.',
    icon: Zap,
    gradient: 'from-blue-500/20 to-cyan-400/10',
    features: ['Water Resistant', 'Chronograph', 'Ceramic Bezel']
  },
  {
    id: 'classics',
    title: 'Luxury Classics',
    description: 'Timeless luxury models with rich heritage.',
    icon: Crown,
    gradient: 'from-rose-gold/20 to-champagne-gold/10',
    features: ['Gold Cases', 'Leather Straps', 'Roman Numerals']
  },
  {
    id: 'limited',
    title: 'Limited Editions',
    description: 'Exclusive releases with limited availability.',
    icon: Star,
    gradient: 'from-purple-500/20 to-pink-400/10',
    features: ['Numbered Cases', 'Rare Materials', 'Collector Items']
  }
];

const CategoryHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('modern');

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-text mb-4">
            Master Collections
          </h2>
          <p className="text-xl text-luxury-text-secondary max-w-2xl mx-auto">
            Four distinct categories, each representing the pinnacle of horological excellence
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'btn-luxury' 
                  : 'btn-ghost text-luxury-text-secondary hover:text-champagne-gold'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.title}
            </Button>
          ))}
        </div>

        {/* Category Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Active Category Info */}
          <div className="scroll-reveal">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === category.id ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4 absolute'
                }`}
              >
                {activeCategory === category.id && (
                  <>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-champagne-gold" />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-luxury-text">
                        {category.title}
                      </h3>
                    </div>
                    
                    <p className="text-xl text-luxury-text-secondary mb-8">
                      {category.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-champagne-gold rounded-full mr-3" />
                          <span className="text-luxury-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="btn-luxury group">
                      View Collection
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Category Visual Grid */}
          <div className="grid grid-cols-2 gap-4 scroll-reveal">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`luxury-card glass-card p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeCategory === category.id ? 'ring-2 ring-champagne-gold' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${category.gradient} mb-4 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-luxury-text" />
                </div>
                <h4 className="font-serif text-lg font-semibold text-luxury-text mb-2">
                  {category.title}
                </h4>
                <p className="text-sm text-luxury-text-muted">
                  {category.description.split('.')[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;