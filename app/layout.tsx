import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/componets/CartContext/page';
import Header from '@/componets/Header/page';
import Footer from '@/componets/Footer/page';

export const metadata: Metadata = {
  title: 'My Product Showcase',
  description: 'A Next.js app showcasing products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}