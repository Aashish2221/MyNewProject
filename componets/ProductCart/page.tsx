import { Star } from 'lucide-react';

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

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'featured' | 'minimal' | 'elegant';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  // Basic variant handling for flexibility (can be expanded later)
  const baseClasses = 'bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group';
  const paddingClasses = variant === 'compact' ? 'p-2' : variant === 'featured' ? 'p-6' : 'p-4';
  const textSizeClasses = variant === 'compact' ? 'text-xs' : variant === 'featured' ? 'text-lg font-bold' : 'text-sm font-medium';
  const imageClasses = variant === 'compact' ? 'aspect-square' : 'aspect-[4/3] md:aspect-square';

  // Calculate original price if discount exists (assuming product.price is discounted price)
  const originalPrice = product.discount ? (product.price / (1 - product.discount / 100)).toFixed(2) : null;

  return (
    <div className={baseClasses}>
      <div className={`relative overflow-hidden ${imageClasses}`}>
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-100 group-hover:brightness-105" 
        />
        {product.discount && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            -{product.discount}%
          </div>
        )}
        {/* Optional subtle overlay for better text contrast on featured variant */}
        {variant === 'featured' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        )}
      </div>
      <div className={paddingClasses}>
        <h3 className={`${textSizeClasses} text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-gray-900 transition-colors`}>
          {product.name}
        </h3>
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <Star className={`w-4 h-4 fill-yellow-400 text-yellow-400 ${variant === 'compact' ? 'w-3 h-3' : ''}`} />
            <span className={`text-xs text-gray-600 font-medium ${variant === 'compact' ? 'text-xs' : 'text-sm'}`}>
              {product.rating} / 5
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className={`text-xl font-bold text-gray-900 ${variant === 'compact' ? 'text-lg' : variant === 'featured' ? 'text-2xl' : ''}`}>
            ${product.price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className={`text-sm text-gray-400 line-through ${variant === 'compact' ? 'text-xs' : ''}`}>
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}