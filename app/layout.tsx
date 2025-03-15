import type { Metadata } from 'next';
import { Noto_Sans_JP, Outfit } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
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
    <html lang='ja'>
      <body
        className={`${notoSansJP.variable} ${outfit.variable} text-primary antialiased bg-[#15172a]`}
      >
        {children}
      </body>
    </html>
  );
}
