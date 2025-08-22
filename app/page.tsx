import ProductGrid from "@/componets/ProductGrid";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <div className="min-h-screen bg-gray-100">
          <section className="text-center py-5">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              New Product
            </h2>
            <ProductGrid />
          </section>
        </div>
      </main>
    </>
  );
}
