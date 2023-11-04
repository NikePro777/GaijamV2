import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* gap-20 py-10 md:gap-28 */}
      <section className="max-container padding-container flex flex-col xl:flex-row">
        <div className="hero-map min-h-[450px] max-h-[450px] md:min-h-[714px]" />

        <div className="relative z-20 flex flex-1 flex-col ">
          {/* 2xl:pb-9 */}
          <div className="flexCenter w-full flex-col ">
            {/* lg:bold-88 */}
            <h1 className="cooltext  py-8 xs:py-12 ">GaiJam</h1>
            {/* bold-52xl:bold-40 */}
            <p className="bold-20 sm:bold-26 text-black-100 md:bold-32 backdrop-blur">
              Мы - единственная в Екатеринбурге многопрофильная компания, способная доставить машину
              комфорт класса по доступной цене.
            </p>

            <div className="my-11 flex flex-wrap gap-2 xxs:pt-6 md:pt-12 lg:pt-8">
              <div className="flex items-center gap-2">
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
                  ))}
              </div>

              <p className="bold-14 text-black-90 md:bold-20">
                более 1к
                <span className="regular-14  ml-1 md:regular-20">Довольных клиентов</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Специализированный Автосервис</h2>
          <p className="text-lg mb-4">
            <a href="tel:+79581365095" className="text-blue-500 hover:underline">
              +7 (958) 136-5095
            </a>
          </p>
          <ul className="text-left">
            <li className="text-base mb-2">Работаем для Вас</li>
            <li className="text-base mb-2">Ежедневно с 09 до 21</li>
            <li className="text-base">По адресу</li>
            <li className="text-base">ул. Пехотинцев д.4</li>
          </ul>
        </div>
      </section>
    </>
  );
}
