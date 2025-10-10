import BannerCarousel from "@/componets/BannerCarousel/page";
import ProductCarousel from "@/componets/ProductCarousel/page";
import ProductGrid from "@/componets/ProductGrid";
import { products } from "@/data";

export default function Home() {
  return (
    <>
      <main className="flex-grow w-7xl mx-auto">
        <div className="min-h-screen bg-gray-100">
          <section className="pb-5 pt-1">
            <BannerCarousel />
          </section>
          {/* <section className="text-center py-5">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              New Product
            </h2>
            <ProductGrid />
          </section> */}
          <section className="py-5 px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Related Products
            </h2>
            <ProductCarousel products={products} />
          </section>
        </div>
      </main>
    </>
  );
}