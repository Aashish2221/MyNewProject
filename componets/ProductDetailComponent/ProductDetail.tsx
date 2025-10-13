"use client";
import { getProductById } from '@/data/allProducts';
import { ChevronLeft, Star, ShoppingCart, Link } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import AddToCartButton from '../AddToCartButton/page';

export default function ProductDetail() {
  const productId = usePathname().split('/').slice(-1)[0];
  const product = getProductById(Number(productId));
  console.log(productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <Link href="/" className="text-slate-600 hover:text-slate-900 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            to={`/category/${product.category}`}
            className="inline-flex items-center text-slate-600 hover:text-slate-900"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to {product.category}
          </Link>
        </div>
      </div> */}

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                  -{product.discount}% OFF
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-2">
                  {product.category}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                  {product.name}
                </h1>

                {product.rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating!)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-600 font-semibold">{product.rating}</span>
                    <span className="text-slate-400">| 128 reviews</span>
                  </div>
                )}

                <div className="mb-6">
                  {discountedPrice ? (
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl md:text-5xl font-bold text-slate-900">
                        ${discountedPrice}
                      </span>
                      <span className="text-2xl text-slate-400 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-4xl md:text-5xl font-bold text-slate-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {product.description || 'This is a premium quality product that offers excellent value for money.'}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-semibold">Availability:</span>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-semibold">Free Shipping:</span>
                    <span>On orders over $50</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <AddToCartButton product={product} />
                {/* <button className="w-full border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all">
                  Buy Now
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
