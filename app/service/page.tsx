import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: ['About Gaijam', 'Avto', 'Taxi', 'Privacy Policy', 'Contact Us'],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];

  type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
  };

  const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
      <div className="flex flex-col gap-5">
        <h4 className="bold-18 whitespace-nowrap">{title}</h4>
        {children}
      </div>
    );
  };

  return (
    <section className="mb-24 mt-5">
      <h1 className="cooltext py-3 xs:py-6 text-center">Почему нам доверяют?</h1>

      <div className="flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-full relative md:h-80 lg:w-1/3 lg:h-auto">
          <Image src="/diagnostik.png" alt="Ваше изображение" layout="fill" objectFit="cover" />
        </div>
        <div className="w-full md:w-full lg:w-2/3 flex flex-col justify-center bg-gray-100 p-4">
          <h2 className="text-2xl font-bold mb-2">Заголовок</h2>
          <p className="text-lg">Ваш текст...</p>
        </div>
      </div>

      {/* <div className="flexCenter">
        <div className="padding-container max-container flex w-full flex-col gap-14">
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
            <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  );
}
