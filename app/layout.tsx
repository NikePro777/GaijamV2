import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GaiJam',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
