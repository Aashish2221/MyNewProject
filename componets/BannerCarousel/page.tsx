"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import '@/styles/swiper-custom.css'; // Updated to style pagination dots

// Define TypeScript interface for banner data
interface Banner {
  id: number;
  image: string;
  title?: string;
  description?: string;
}

// Sample banner data (replace with your actual data)
const banners: Banner[] = [
  { id: 1, image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp', title: 'Banner 1', description: 'Featured Offer' },
  { id: 2, image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp', title: 'Banner 2', description: 'Special Deal' },
  { id: 3, image: 'https://res.cloudinary.com/bold-pm/image/upload/Graphics/DashboardBanners/db-6.webp', title: 'Banner 3', description: 'New Arrival' },
];

export default function BannerCarousel() {
  return (
    <div className="flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-12">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={banner.image}
                alt={banner.title || `Banner ${banner.id}`}
                width={1200}
                height={400}
                priority
                className="object-cover w-full h-full rounded-lg"
              />
              {banner.title && (
                <div className="absolute bottom-4 left-4 text-white text-shadow">
                  <h3 className="text-xl sm:text-2xl font-bold">{banner.title}</h3>
                  {banner.description && <p className="text-sm sm:text-base">{banner.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}