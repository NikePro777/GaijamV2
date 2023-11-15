import Button from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* gap-20 py-10 md:gap-28 */}
      <section className="max-container padding-container flex flex-col xl:flex-row">
        <div className="hero-map min-h-[500px] max-h-[500px] md:min-h-[714px]" />

        <div className="relative z-20 flex flex-1 flex-col ">
          {/* 2xl:pb-9 */}
          <div className="flexCenter w-full flex-col ">
            {/* lg:bold-88 */}
            <h1 className="cooltext  py-3 xs:py-10 ">GaiJam</h1>
            {/* bold-52xl:bold-40 */}
            <p className="bold-20 sm:bold-26 text-black-100 md:bold-28 backdrop-blur">
              Мы - единственная в Екатеринбурге многопрофильная компания, способная доставить машину
              комфорт класса по доступной цене.
            </p>
            <Button
              type="submit"
              title="Хочу!"
              variant="btn_dark_green_outline mt-5 xxs:mt-16 xs:mt-10 "
              link="/service"></Button>
            <div className="my-7 sm:my-0 flex flex-wrap gap-2 xs:pt-8 xxs:pt-6 xxs2:pt-12 md:pt-0 md2:pt-4 lg:pt-3 xs2:my-7">
              <div className="flex items-center gap-2">
                {Array(5)
                  .fill(1)
                  .map((_, index) => (
                    <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
                  ))}
              </div>

              <p className="bold-14 text-black-90 md:bold-20 lg:bold-26">
                более 1к
                <span className="regular-14  ml-1 md:regular-20 lg:regular-24 lg:ml-3">
                  Довольных клиентов
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-6 max-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="cooltext2 my-8">Специализированный Автосервис</h2>
          <p className="text-3xl my-4 ">
            Запись по телефону <br />
            <a href="tel:+79581365095" className="text-blue-500 hover:underline ml-4 ">
              +7 (958) 136-5095
            </a>
          </p>
          <ul className="text-left p-10">
            <li className="text-2xl text-gray-20 mb-2">Работаем для Вас</li>
            <li className="text-2xl text-gray-30 mb-2">Ежедневно с 09:00 до 21:00</li>
            <li className="text-2xl text-gray-20 mb-2">По адресу</li>
            <li className="text-2xl text-gray-30 mb-2">ул. Пехотинцев д.4</li>
          </ul>
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              title="Услуги автосервиса"
              variant="btn_dark_green_outline"
              link="/service"></Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 w-screen h-[400px] xl:h-[700px] relative overflow-hidden">
        <div className="absolute inset-0 ">
          <img src="./mers.png" alt="Ваше изображение" className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0  items-center justify-center bg-black bg-opacity-50 text-white my-12 lg:my-32">
          <h2 className="cooltext2  mx-auto text-center">Современное авто без вложений!</h2>
          <div className="mx-auto text-center xl:my-32">
            <Button
              type="submit"
              title="подробнее"
              variant="btn_dark_green_outline"
              link="/taxi"
              block={true}></Button>
          </div>
        </div>
      </section>
    </>
  );
}
