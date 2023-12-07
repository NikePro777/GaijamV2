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
    {
      title: 'Гарантия работы 1 год',
      text: 'Распространяется на все услуги. Если что-то пойдёт не так — вернём вам деньги за проведённые работы либо бесплатно отремонтируем авто.',
      link: '/deffence.png',
    },
    {
      title: 'Открытые сервисные зоны',
      text: 'В отличие от большинства сервисов, мы не скрываем процесс ТО и ремонта автомобилей от клиентов. Вы даже сможете спросить совета у мастера — это бесплатно.',
      link: '/servise-car.png',
    },
    {
      title: 'Сотрудники высшей квалификации',
      text: 'Средний опыт работы специалистов — 10 лет, сотрудники прошли обучение в специализирующих центрах ',
      link: '/staff.png',
    },
    {
      title: 'Адекватные цены',
      text: 'Стоимость запчастей, расходников, масла и жидкостей здесь ниже, чем у дилеров.',
      link: '/price.png',
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
    <section className="mb-24 mt-5 md:mt-0 md:mb-14 padding-container mx-auto max-w-[1800px]">
      <h1 className="cooltext xs:mb-7 py-3 xs:py-6 text-center">Почему нам доверяют?</h1>
      <div className="grid grid-cols-1 gap-x-11 md:grid-cols-2 mx-auto mb-60 md:mb-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {FOOTER_LINKS.map((item, i) => {
          return <Card link={item.link} title={item.title} text={item.text} key={i} />;
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
