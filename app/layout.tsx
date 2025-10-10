import type { Metadata } from 'next';
import './globals.css';
import Header from '@/componets/Header/page';
import Footer from '@/componets/Footer/page';
import AuthProvider from '@/redux/providers/authprovider';

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
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}