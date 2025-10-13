import { ShoppingCart, Star } from 'lucide-react';
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

  return (
    <div className={"bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100 group"}>
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-auto object-custome group-hover:scale-110 transition-transform duration-500"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{product.discount}%
          </div>
        )}
        {/* <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-100">
          <ShoppingCart className="w-4 h-4 text-slate-700" />
        </button> */}
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-sm md:text-base text-slate-800 mb-1 md:mb-2 line-clamp-1">
          {product.name}
        </h3>
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs md:text-sm text-slate-600">{product.rating}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-slate-900">
            ${product.price}
          </span>
          {product.discount && (
            <span className="text-xs md:text-sm text-slate-400 line-through">
              ${(product.price / (1 - product.discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
