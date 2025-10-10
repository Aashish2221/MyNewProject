"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import '@/styles/swiper-custom.css'; // Import custom CSS for arrows
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

// Define TypeScript interface for product data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

// Define props type
interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={22}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card className="relative border-none shadow-md hover:shadow-xl transition-all duration-100 hover:scale-105">
              {/* Badge for New or Discount */}
              {product.isNew && (
                <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                  New
                </Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                  {product.discount}% Off
                </Badge>
              )}
              <CardHeader className="p-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  priority
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                  {product.name}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-gray-700 font-medium">
                    ${product.discount ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price.toFixed(2)}
                  </p>
                  {product.discount && (
                    <p className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Link href={`/products/${product.id}`} passHref>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 hover:bg-gray-100"
                >
                  Quick View
                </Button> */}
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}