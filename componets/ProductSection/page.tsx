"use client";
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ProductCategory } from '@/types/products';
import { useRouter } from 'next/navigation';
import ProductCard from '../ProductCart/page';

interface ProductSectionProps {
  category: ProductCategory;
  variant?: 'default' | 'compact' | 'featured' | 'minimal' | 'elegant';
}

export default function ProductSection({
  category,
  variant = 'default',
}: ProductSectionProps) {
  const router = useRouter();
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

  return (
    <section className={"bg-gradient-to-r from-white via-slate-50 to-white py-8 md:py-12"}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className={"text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight"}>{category.title}</h2>
          <a
            href={`/${category.title.toLowerCase()}`}
            className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="relative">
          {isMobile ? (
            <>
              <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
              >
                {category.products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-[270px] snap-start"
                    onClick={() => router.push(`/product/${product.id}`)}
                  >
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
            <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6`}>
              {category.products.slice(0, 4).map((product) => (
                <div key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
                  <ProductCard product={product} variant={variant} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
