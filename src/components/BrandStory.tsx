import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandStory = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold/5 to-satin-silver/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-champagne-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-satin-silver/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="scroll-reveal">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-text mb-6">
              Crafting <span className="text-champagne-gold">Time</span> Since 1973
            </h2>
            
            <p className="text-xl text-luxury-text-secondary mb-8 leading-relaxed">
              We don't just sell watches. We sell time, legacy, and the essence of craftsmanship. 
              Each timepiece is a testament to our unwavering commitment to horological excellence.
            </p>

            <p className="text-lg text-luxury-text-muted mb-12 leading-relaxed">
              From our Swiss workshops to your wrist, every Chronovault watch undergoes meticulous 
              hand-assembly by master craftsmen with decades of experience. We believe in creating 
              heirlooms that transcend generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-champagne-gold" />
                </div>
                <div className="font-orbitron text-2xl font-bold text-luxury-text">50+</div>
                <div className="text-sm text-luxury-text-muted">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-champagne-gold" />
                </div>
                <div className="font-orbitron text-2xl font-bold text-luxury-text">100K+</div>
                <div className="text-sm text-luxury-text-muted">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-champagne-gold" />
                </div>
                <div className="font-orbitron text-2xl font-bold text-luxury-text">50</div>
                <div className="text-sm text-luxury-text-muted">Years Heritage</div>
              </div>
            </div>

            <Button className="btn-luxury group">
              Read Our Story
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Elements */}
          <div className="scroll-reveal">
            <div className="relative">
              {/* Main Quote Card */}
              <div className="glass-card p-8 rounded-3xl mb-8">
                <div className="text-6xl text-champagne-gold/30 font-serif mb-4">"</div>
                <blockquote className="text-xl text-luxury-text-secondary italic mb-4">
                  The watch you wear should outlast trends and outlive time. It should be a 
                  companion to your greatest moments and a witness to your legacy.
                </blockquote>
                <cite className="text-champagne-gold font-semibold">
                  — Marcus Chronos, Founder
                </cite>
              </div>

              {/* Heritage Timeline */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-champagne-gold rounded-full mr-4" />
                  <div>
                    <div className="font-orbitron text-champagne-gold font-semibold">1973</div>
                    <div className="text-luxury-text-muted">Founded in Geneva</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-satin-silver rounded-full mr-4" />
                  <div>
                    <div className="font-orbitron text-satin-silver font-semibold">1987</div>
                    <div className="text-luxury-text-muted">First Award for Innovation</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-rose-gold rounded-full mr-4" />
                  <div>
                    <div className="font-orbitron text-rose-gold font-semibold">2023</div>
                    <div className="text-luxury-text-muted">50 Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;