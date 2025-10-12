import DashboardBanner from "@/componets/DashboarBanner/page";
import ProductSection from "@/componets/ProductSection/page";
import { productCategories } from "@/data/products";

function App() {
  const variants: Array<'default' | 'compact' | 'featured' | 'minimal' | 'elegant'> = [
   
    'elegant',
    
  ];

  const itemsPerRow = [4];

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardBanner />

      <main>
        {productCategories.map((category, index) => (
          <ProductSection
            key={category.id}
            category={category}
            variant={variants[index % variants.length]}
            itemsPerRow={itemsPerRow[index % itemsPerRow.length]}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
