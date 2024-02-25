import type { Metadata } from 'next';
import './globalStyles/normalize.css';
import './globalStyles/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Автосервис и автоподбор в Екатеринбурге',
  description:
    'Мы предлагаем полный комплекс услуг по работе с автомобилем: покупка нового авто по низким ценам, автосервис, такси. Единственная в Екатеринбурге и на сортировке компания предлагающая полный перечень услуг',
  keywords: 'Автосервис, сервис, Екатеринбург, сортировка, такси, автоподбор',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body>
        <Navbar />
        {/* <main className="relative overflow-hidden">{children}</main> */}
        {/* <main>{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
