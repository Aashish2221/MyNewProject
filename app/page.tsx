import DashboardBanner from "@/componets/DashboarBanner/page";
import ProductSection from "@/componets/ProductSection/page";
import { productCategories } from "@/data/products";

function App() {
  const variants: Array<'elegant'> = [
    'elegant',
  ];
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardBanner />
      <main>
        {productCategories.map((category, index) => (
          <ProductSection
            key={category.id}
            category={category}
            variant={variants[index % variants.length]}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
