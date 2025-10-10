"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  rating?: number;
  category?: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full py-8 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="!pb-12"
        >
          {products.map((product) => {
            const discountedPrice = product.discount
              ? (product.price * (1 - product.discount / 100))
              : product.price;
            const isHovered = hoveredId === product.id;

            return (
              <SwiperSlide key={product.id}>
                <Card
                  className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <CardHeader className="p-0 relative overflow-hidden">
                    <div className="relative h-56 sm:h-64 bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                        {product.isNew && (
                          <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg text-xs font-semibold px-3 py-1">
                            NEW
                          </Badge>
                        )}
                        {product.discount && (
                          <Badge className="bg-rose-500 hover:bg-rose-600 text-white shadow-lg text-xs font-semibold px-3 py-1">
                            -{product.discount}%
                          </Badge>
                        )}
                        {product.category && (
                          <Badge variant="secondary" className="bg-white/90 text-slate-700 shadow-md text-xs">
                            {product.category}
                          </Badge>
                        )}
                      </div>

                      <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-9 w-9 rounded-full bg-white/95 hover:bg-rose-500 hover:text-white shadow-lg transition-all duration-300"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-9 w-9 rounded-full bg-white/95 hover:bg-blue-500 hover:text-white shadow-lg transition-all duration-300"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-slate-800 line-clamp-2 min-h-[2.5rem] leading-tight">
                        {product.name}
                      </h3>

                      {product.rating && (
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3.5 w-3.5 ${
                                i < Math.floor(product.rating!)
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'fill-slate-200 text-slate-200'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-slate-500 ml-1">
                            ({product.rating})
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900">
                        ${discountedPrice.toFixed(2)}
                      </span>
                      {product.discount && (
                        <span className="text-sm text-slate-400 line-through font-medium">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {product.discount && (
                      <p className="text-xs text-emerald-600 font-medium">
                        You save ${(product.price - discountedPrice).toFixed(2)}
                      </p>
                    )}
                  </CardContent>

                  <CardFooter className="p-5 pt-0 flex gap-2">
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <Button
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-xl transition-all duration-300 group/btn"
                        size="default"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Add to Cart
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
          width: 20px;
          height: 20px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #0f172a;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
