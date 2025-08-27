import ProductDetail from '@/componets/ProductDetailComponent/page';
import { products } from '@/data';
import { notFound } from 'next/navigation';

// Define the props type for the dynamic route
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}