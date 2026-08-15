import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marina Restaurant Cafe | Λιμένας Χερσονήσου, Κρήτη — Italian · Seafood · Greek',
  description:
    'Marina Restaurant Cafe — all-day Italian, Seafood & Greek dining by the marina of Hersonissos, Crete. Fresh catch, handmade pasta, sea views, coffee to late night.',
  keywords: [
    'Marina Restaurant Cafe',
    'Χερσόνησος',
    'Hersonissos restaurant',
    'seafood Crete',
    'Italian restaurant Crete',
    'marina dining',
  ],
  openGraph: {
    title: 'Marina Restaurant Cafe — Λιμένας Χερσονήσου, Κρήτη',
    description: 'Italian · Seafood · Greek. By the Marina of Hersonissos.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={`${fraunces.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
