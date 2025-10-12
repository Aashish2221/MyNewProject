"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% off on selected items',
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'Shop Now',
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Discover the latest trends',
    image: 'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'Explore',
  },
  {
    id: 3,
    title: 'Special Offers',
    subtitle: 'Limited time deals you can\'t miss',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'View Deals',
  },
];

export default function DashboardBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-slate-900">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 animate-fade-in-delay">
                  {banner.subtitle}
                </p>
                <button className="bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
