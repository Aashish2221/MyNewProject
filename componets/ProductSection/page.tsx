"use client";
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCart/page';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  discount?: number;
}

export interface ProductCategory {
  id: string;
  title: string;
  products: Product[];
}
interface ProductSectionProps {
  category: ProductCategory;
  variant?: 'default' | 'compact' | 'featured' | 'minimal' | 'elegant';
  itemsPerRow?: number;
}

export default function ProductSection({
  category,
  variant = 'default',
  itemsPerRow = 5
}: ProductSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkArrows();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkArrows);
      return () => container.removeEventListener('scroll', checkArrows);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

//   const sectionStyles = {
//     default: 'bg-white py-8 md:py-12',
//     compact: 'bg-slate-50 py-6 md:py-10',
//     featured: 'bg-gradient-to-br from-slate-50 to-white py-8 md:py-12',
//     minimal: 'bg-white py-6 md:py-10 border-y border-slate-100',
//     elegant: 'bg-gradient-to-r from-white via-slate-50 to-white py-8 md:py-12',
//   };

//   const titleStyles = {
//     default: 'text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 md:mb-8',
//     compact: 'text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6',
//     featured: 'text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 mb-6 md:mb-8',
//     minimal: 'text-2xl md:text-3xl font-semibold text-slate-700 mb-4 md:mb-6',
//     elegant: 'text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 md:mb-8 tracking-tight',
//   };

  const gridCols = {
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-3 lg:grid-cols-5',
  }[itemsPerRow] || 'md:grid-cols-3 lg:grid-cols-5';

  return (
    <section className={"bg-gradient-to-r from-white via-slate-50 to-white py-8 md:py-12"}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className={"text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 md:mb-8 tracking-tight"}>{category.title}</h2>

        <div className="relative">
          {isMobile ? (
            <>
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
              >
                {category.products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-[280px] snap-start">
                    <ProductCard product={product} variant={variant} />
                  </div>
                ))}
              </div>

              {showLeftArrow && (
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-slate-100 transition-all"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-700" />
                </button>
              )}

              {showRightArrow && (
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-slate-100 transition-all"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-slate-700" />
                </button>
              )}
            </>
          ) : (
            <div className={`grid grid-cols-2 ${gridCols} gap-4 md:gap-6`}>
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} variant={variant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
