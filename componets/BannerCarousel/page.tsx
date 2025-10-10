"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Banner {
  id: number;
  image: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
}

const banners: Banner[] = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp',
    title: 'Summer Collection 2024',
    description: 'Discover the latest trends with up to 50% off on selected items',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
    badge: 'New Arrival'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp',
    title: 'Exclusive Deals',
    description: 'Limited time offer on premium products. Don\'t miss out!',
    ctaText: 'View Deals',
    ctaLink: '/deals',
    badge: 'Hot Deal'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp',
    title: 'Fresh Arrivals',
    description: 'Explore our newest collection curated just for you',
    ctaText: 'Explore',
    ctaLink: '/new',
    badge: 'Trending'
  },
];

export default function BannerCarousel() {
  return (
    <div className="w-full mx-auto px-2 py-3">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          className="overflow-hidden shadow-2xl !pb-14"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[300px] group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent z-10" />

                <Image
                  src={banner.image}
                  alt={banner.title || `Banner ${banner.id}`}
                  width={1400}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                  className="object-cover transition-transform duration-[8000ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                    <div className="max-w-2xl space-y-4 sm:space-y-6 animate-fadeIn">
                      {banner.badge && (
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white shadow-lg">
                          <Sparkles className="h-4 w-4 text-yellow-300" />
                          <span className="text-xs sm:text-sm font-semibold tracking-wide">
                            {banner.badge}
                          </span>
                        </div>
                      )}

                      {banner.title && (
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                          {banner.title}
                        </h1>
                      )}

                      {banner.description && (
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 leading-relaxed max-w-xl drop-shadow-lg">
                          {banner.description}
                        </p>
                      )}

                      {banner.ctaText && banner.ctaLink && (
                        <div className="pt-2 sm:pt-4">
                          <Link href={banner.ctaLink}>
                            <Button
                              size="lg"
                              className="bg-white text-slate-900 hover:bg-slate-100 shadow-2xl hover:shadow-white/20 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full font-semibold group/btn"
                            >
                              {banner.ctaText}
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .swiper-pagination {
          bottom: 20px !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .swiper-pagination-bullet-active {
          background: white;
          width: 40px;
          border-radius: 6px;
          border-color: rgba(255, 255, 255, 0.8);
        }

        .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .swiper-pagination-bullet-active {
            width: 28px;
          }
        }
      `}</style>
    </div>
  );
}
