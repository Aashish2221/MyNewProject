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

export const productCategories: ProductCategory[] = [
  {
    id: 'electronics',
    title: 'Latest Electronics',
    products: [
      { id: 1, name: 'Wireless Headphones', price: 79.99, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'electronics', rating: 4.5, discount: 15 },
      { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'electronics', rating: 4.8 },
      { id: 3, name: 'Laptop Stand', price: 45.99, image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400', category: 'electronics', rating: 4.2 },
      { id: 4, name: 'USB-C Hub', price: 34.99, image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'electronics', rating: 4.6 },
      // { id: 5, name: 'Mechanical Keyboard', price: 129.99, image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'electronics', rating: 4.7 },
    ],
  },
  {
    id: 'fashion',
    title: 'Trending Fashion',
    products: [
      { id: 6, name: 'Denim Jacket', price: 89.99, image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.4, discount: 20 },
      { id: 7, name: 'Sneakers', price: 119.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.9 },
      { id: 8, name: 'Sunglasses', price: 59.99, image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.3 },
      { id: 9, name: 'Leather Bag', price: 149.99, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.7 },
      // { id: 10, name: 'Wrist Watch', price: 299.99, image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'fashion', rating: 4.8, discount: 10 },
    ],
  },
  {
    id: 'home',
    title: 'Home Essentials',
    products: [
      { id: 11, name: 'Table Lamp', price: 49.99, image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.5 },
      { id: 12, name: 'Throw Pillows', price: 29.99, image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.2 },
      { id: 13, name: 'Wall Art', price: 79.99, image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.6, discount: 25 },
      { id: 14, name: 'Plant Pot', price: 24.99, image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.4 },
      // { id: 15, name: 'Area Rug', price: 159.99, image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'home', rating: 4.7 },
    ],
  },
  {
    id: 'sports',
    title: 'Sports & Fitness',
    products: [
      { id: 16, name: 'Yoga Mat', price: 39.99, image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.6 },
      { id: 17, name: 'Dumbbells Set', price: 89.99, image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.8, discount: 15 },
      { id: 18, name: 'Running Shoes', price: 129.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.7 },
      { id: 19, name: 'Water Bottle', price: 19.99, image: 'https://images.pexels.com/photos/4210804/pexels-photo-4210804.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.5 },
      // { id: 20, name: 'Fitness Tracker', price: 69.99, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'sports', rating: 4.4 },
    ],
  },
  {
    id: 'books',
    title: 'Bestselling Books',
    products: [
      { id: 21, name: 'Fiction Novel', price: 14.99, image: 'https://images.pexels.com/photos/1053692/pexels-photo-1053692.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.7 },
      { id: 22, name: 'Self-Help Guide', price: 19.99, image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.8, discount: 30 },
      { id: 23, name: 'Cookbook', price: 24.99, image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.5 },
      { id: 24, name: 'Biography', price: 17.99, image: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.6 },
      // { id: 25, name: 'Art Book', price: 34.99, image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'books', rating: 4.9 },
    ],
  },
  {
    id: 'beauty',
    title: 'Beauty & Care',
    products: [
      { id: 26, name: 'Skincare Set', price: 79.99, image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.8, discount: 20 },
      { id: 27, name: 'Hair Dryer', price: 59.99, image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.5 },
      { id: 28, name: 'Perfume', price: 89.99, image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.7 },
      { id: 29, name: 'Makeup Brush Set', price: 44.99, image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.6 },
      // { id: 30, name: 'Face Mask Kit', price: 29.99, image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty', rating: 4.4 },
    ],
  },
];
