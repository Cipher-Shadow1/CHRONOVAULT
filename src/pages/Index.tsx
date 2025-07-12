import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CategoryHighlights from '@/components/CategoryHighlights';
import BestSellers from '@/components/BestSellers';
import BrandStory from '@/components/BrandStory';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CategoryHighlights />
      <BestSellers />
      <BrandStory />
      <Footer />
    </div>
  );
};

export default Index;
