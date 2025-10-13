"use client";
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { productCategories } from '@/data/products';
import { getProductsByCategory } from '@/data/allProducts';
import Link from 'next/link';
import ProductCard from '@/componets/ProductCart/page';

const ITEMS_PER_PAGE = 6;

export default function ProductGrid() {
  const title  = usePathname().slice(1);
  const [currentPage, setCurrentPage] = useState(1);
  
  const category = productCategories.find(cat => cat.title === title);
  const products = useMemo(() => getProductsByCategory(title), [title]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  console.log(getProductsByCategory("essentials"));
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Category Not Found</h1>
          <Link href="/" className="text-slate-600 hover:text-slate-900 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          {/* <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Home
          </Link> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            {category.title}
          </h1>
          <p className="text-slate-600 mt-2">
            Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, products.length)} of {products.length} products
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} variant="default" />
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currentPage === page
                      ? 'bg-slate-800 text-white'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
