"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Product = { id: number; name: string; price: number; image: string };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.985 }}
  className="group bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border border-gray-200 hover:border-blue-400 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 mx-auto"
>

      {/* Image clickable with pointer */}
      <Link href={`/products/${product.id}`} passHref>
        <motion.div
          className="overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="w-[220px] h-[220px] object-cover"
          />
        </motion.div>
      </Link>

      {/* Content */}
      <div className="p-4 text-center">
        <motion.h3
          className="text-gray-800 font-semibold text-base mb-1 group-hover:text-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {product.name}
        </motion.h3>

        <p className="text-black font-bold text-lg">₹{product.price}</p>

        <Link href={`/products/${product.id}`} passHref>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-3 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            Shop Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
