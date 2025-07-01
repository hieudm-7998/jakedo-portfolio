import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QueryClient from '@/components/ui/QueryClient';

export const metadata: Metadata = {
  title: {
    default: 'JakeDo • Web Developer Porfolio',
    template: '%s • JakeDo • Web Developer Porfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <QueryClient>
        <body className='antialiased'>
          <div className='h-auto md:h-screen p-6'>
            <div className='absolute inset-0 bg-grid-paper pointer-events-none z-0 opacity-10' />
            <div className='relative bg-[#fffbf4] border-2 border-black rounded-md w-full h-full brand-shadow !z-10 flex flex-col overflow-hidden'>
              <Header />
              <div className='flex-1 overflow-auto'>{children}</div>
              <Footer />
            </div>
          </div>
        </body>
      </QueryClient>
    </html>
  );
}
