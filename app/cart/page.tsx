import CartClient from "@/componets/CartComponent/CartClient";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

// Mock function to fetch cart data server-side (replace with actual implementation)
async function getCartData(): Promise<CartItem[]> {
  // Replace with actual server-side cart fetching (e.g., from database or API)
  return [];
}

export default async function CartPage() {
  const cart = await getCartData();
  return <CartClient cart={cart} />;
}