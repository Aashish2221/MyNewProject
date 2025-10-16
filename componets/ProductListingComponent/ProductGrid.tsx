"use client";
import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { productCategories } from '@/data/products';
import { getProductsByCategory } from '@/data/allProducts';
import Link from 'next/link';
import ProductCard from '@/componets/ProductCart/page';

const ITEMS_PER_PAGE = 6;

export default function ProductGrid() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = pathname.slice(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const category = useMemo(() => productCategories.find(cat => cat.title.toLowerCase() === title.toLowerCase()), [title]);
  const allProducts = useMemo(() => getProductsByCategory(title), [title]);

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];
    products = products.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return products;
  }, [allProducts, sortBy, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, priceRange]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= startPage && i <= endPage)) {
        items.push(i);
      } else if (i === startPage - 1 && startPage > 2) {
        items.push('...');
      } else if (i === endPage + 1 && endPage < totalPages - 1) {
        items.push('...');
      }
    }
    return items;
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Category Not Found
          </h1>
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-white text-slate-700 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Header */}
      <section 
        className="relative bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 text-white py-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center text-xs md:text-sm text-slate-300 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium truncate">{category.title}</span>
          </nav>
          
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
            {category.title}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-slate-300">
            Discover {filteredProducts.length} premium products
          </p>
        </div>
      </section>

      {/* Controls: Sort & Filter */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Sort Dropdown */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <SortAsc className="w-4 h-4 text-slate-600 flex-shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-none px-3 py-2 text-sm md:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 bg-white"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-lg hover:shadow-lg transition-all active:scale-95"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>

          {/* Showing Info */}
          <p className="text-xs md:text-sm text-slate-600 w-full sm:w-auto">
            {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length}
          </p>
        </div>

        {/* Filter Sidebar */}
        <div className="flex gap-6 md:gap-8">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 bg-white rounded-lg shadow-sm p-6 sticky top-8 h-fit">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Price Range
            </h3>
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="flex-1"
                />
                <span className="text-sm font-medium min-w-fit">${priceRange[0]}</span>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm font-medium min-w-fit">${priceRange[1]}</span>
              </div>
              <button
                onClick={() => setPriceRange([0, 1000])}
                className="w-full py-2 text-xs text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Overlay - IMPROVED */}
          {isFilterOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
                onClick={() => setIsFilterOpen(false)}
              />
              
              {/* Slide-in Panel */}
              <div className="lg:hidden fixed inset-0 z-50 flex items-end md:items-center justify-center">
                <div className="bg-white rounded-t-2xl md:rounded-2xl w-full md:w-96 max-h-[80vh] overflow-y-auto shadow-2xl md:shadow-xl animate-in slide-in-from-bottom-5 md:zoom-in-95">
                  {/* Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 md:p-6 flex justify-between items-center rounded-t-2xl md:rounded-t-2xl">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button 
                      onClick={() => setIsFilterOpen(false)} 
                      className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Close filters"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Filter Content */}
                  <div className="p-4 md:p-6 space-y-6">
                    {/* Price Range Section */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Filter className="w-4 h-4 text-slate-600" />
                        Price Range
                      </h4>
                      
                      <div className="space-y-4">
                        {/* Min Price */}
                        <div>
                          <label className="text-xs text-slate-600 font-medium block mb-2">
                            Minimum: ${priceRange[0]}
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
                          />
                        </div>

                        {/* Max Price */}
                        <div>
                          <label className="text-xs text-slate-600 font-medium block mb-2">
                            Maximum: ${priceRange[1]}
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
                          />
                        </div>

                        {/* Price Display */}
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-sm text-slate-600">
                            Price: <span className="font-bold text-slate-900">${priceRange[0]} - ${priceRange[1]}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200"></div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setPriceRange([0, 1000]);
                        }}
                        className="flex-1 py-3 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        Reset
                      </button>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="flex-1 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-slate-800 to-slate-700 hover:shadow-lg rounded-lg transition-all active:scale-95"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {currentProducts.length === 0 ? (
              <div className="text-center py-12 md:py-16">
                <Filter className="w-12 h-12 md:w-16 md:h-16 mx-auto text-slate-300 mb-4" />
                <p className="text-sm md:text-base text-slate-600 mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSortBy('default');
                    setPriceRange([0, 1000]);
                  }}
                  className="px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white text-sm md:text-base rounded-lg hover:shadow-lg transition-all active:scale-95"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {currentProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    href={`/product/${product.id}`}
                    className="block group cursor-pointer"
                  >
                    <ProductCard 
                      product={product} 
                      variant="default" 
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex-shrink-0 p-2 md:p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all hover:shadow-md"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {getPaginationItems().map((item, idx) => (
              <button
                key={idx}
                onClick={() => typeof item === 'number' && handlePageChange(item)}
                disabled={typeof item !== 'number'}
                className={`flex-shrink-0 px-2 md:px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-all shadow-sm ${
                  typeof item === 'number'
                    ? currentPage === item
                      ? 'bg-gradient-to-r from-slate-800 to-slate-600 text-white shadow-md'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:shadow-md'
                    : 'text-slate-400 cursor-default'
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex-shrink-0 p-2 md:p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all hover:shadow-md"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}