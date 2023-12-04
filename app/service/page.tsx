import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const FOOTER_LINKS = [
    {
      title: 'Плановое ТО',
      text: 'Плановое техническое обслуживание в соответствии с регламентом производителя. Необходимый комплекс работ и материалов в соответствии с пробегом автомобиля',
      link: '/to.png',
    },
    {
      title: 'Ремонт автомобиля',
      text: 'Профессиональный ремонт: Подвески, Тормозной системы, Двигателя, АКПП, ДЕШЕВЛЕ ДИЛЕРА',
      link: '/repair.png',
    },
    {
      title: 'Диагностика и ремонт',
      text: 'Проверка на наличие ошибок Диагностика электронных блоков',
      link: '/diagnostik.png',
    },
    {
      title: 'Проверка на наличие ошибок Диагностика электронных блоков',
      text: 'В штате техцентра работают автожестянщики, кузовщики-маляры, прошедшие обучение в специализированных центрах',
      link: '/deteiling.png',
    },
    {
      title: 'Увеличение мощности кодирования',
      text: 'мастера помогут улучшить работу вашего авто. Используем проверенные и безопасные способы чип-тюнинга',
      link: '/power.png',
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
      <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2 mx-auto mb-60 md:mb-0 lg:grid-cols-3">
        {FOOTER_LINKS.map((item) => {
          return <Card link={item.link} title={item.title} />;
        })}
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
