import { ProductCategory } from "@/types/products";

export const productCategories: ProductCategory[] = [
  {
    id: 'electronics',
    title: 'electronics',
    products: [
      { id: 1, name: 'Wireless Headphones', price: 79.99, image: '/products/alphabet_keychains.webp', category: 'electronics', rating: 4.5, discount: 15, description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and commuters.' },
      { id: 2, name: 'Smart Watch', price: 199.99, image: '/products/ganesha_resin.webp', category: 'electronics', rating: 4.8, description: 'Advanced fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery life.' },
      { id: 3, name: 'Laptop Stand', price: 45.99, image: '/products/key_holder.webp', category: 'electronics', rating: 4.2, description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture and reduces neck strain.' },
      { id: 4, name: 'USB-C Hub', price: 34.99, image: '/products/name stand.webp', category: 'electronics', rating: 4.6, description: '7-in-1 USB-C hub with HDMI, USB 3.0 ports, SD card reader, and power delivery support.' },
      { id: 5, name: 'Mechanical Keyboard', price: 129.99, image: '/products/name_plate.webp', category: 'electronics', rating: 4.7, description: 'RGB backlit mechanical keyboard with customizable switches. Perfect for gaming and typing.' },
    ],
  },
  {
    id: 'fashion',
    title: 'fashion',
    products: [
      { id: 6, name: 'Denim Jacket', price: 89.99, image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.4, discount: 20, description: 'Classic denim jacket with vintage wash. Comfortable fit and timeless style for any season.' },
      { id: 7, name: 'Sneakers', price: 119.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.9, description: 'Premium athletic sneakers with breathable mesh and cushioned sole for maximum comfort.' },
      { id: 8, name: 'Sunglasses', price: 59.99, image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.3, description: 'UV400 protection sunglasses with polarized lenses. Stylish design for everyday wear.' },
      { id: 9, name: 'Leather Bag', price: 149.99, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.7, description: 'Genuine leather messenger bag with multiple compartments. Perfect for work and travel.' },
      { id: 10, name: 'Wrist Watch', price: 299.99, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.8, discount: 10, description: 'Luxury analog watch with stainless steel case and leather strap. Water resistant up to 50m.' },
    ],
  },
  {
    id: 'home',
    title: 'essentials',
    products: [
      { id: 11, name: 'Table Lamp', price: 49.99, image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.5 },
      { id: 12, name: 'Throw Pillows', price: 29.99, image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.2 },
      { id: 13, name: 'Wall Art', price: 79.99, image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.6, discount: 25 },
      { id: 14, name: 'Plant Pot', price: 24.99, image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.4 },
      { id: 15, name: 'Area Rug', price: 159.99, image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.7 },
    ],
  },
  {
    id: 'sports',
    title: 'fitness',
    products: [
      { id: 16, name: 'Yoga Mat', price: 39.99, image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.6 },
      { id: 17, name: 'Dumbbells Set', price: 89.99, image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.8, discount: 15 },
      { id: 18, name: 'Running Shoes', price: 129.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.7 },
      { id: 19, name: 'Water Bottle', price: 19.99, image: 'https://images.pexels.com/photos/4210804/pexels-photo-4210804.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.5 },
      { id: 20, name: 'Fitness Tracker', price: 69.99, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.4 },
    ],
  },
  {
    id: 'books',
    title: 'books',
    products: [
      { id: 21, name: 'Fiction Novel', price: 14.99, image: 'https://images.pexels.com/photos/1053692/pexels-photo-1053692.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.7 },
      { id: 22, name: 'Self-Help Guide', price: 19.99, image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.8, discount: 30 },
      { id: 23, name: 'Cookbook', price: 24.99, image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.5 },
      { id: 24, name: 'Biography', price: 17.99, image: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.6 },
      { id: 25, name: 'Art Book', price: 34.99, image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.9 },
    ],
  },
  {
    id: 'beauty',
    title: 'care',
    products: [
      { id: 26, name: 'Skincare Set', price: 79.99, image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.8, discount: 20 },
      { id: 27, name: 'Hair Dryer', price: 59.99, image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.5 },
      { id: 28, name: 'Perfume', price: 89.99, image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.7 },
      { id: 29, name: 'Makeup Brush Set', price: 44.99, image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.6 },
      { id: 30, name: 'Face Mask Kit', price: 29.99, image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.4 },
    ],
  },
];
