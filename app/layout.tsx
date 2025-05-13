import Header from '@/components/layout/Header';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Sora } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Personal Website',
  description: 'This is my personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className='scroll-smooth'>
      <body className={`${notoSansJP.variable} ${sora.variable} min-h-screen antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
