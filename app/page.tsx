import Image from 'next/image';
import mountains from '../public/avto-logo1.png';

function Background() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* gap-20 py-10 md:gap-28 */}
      <section className="max-container padding-container flex flex-col xl:flex-row">
        <div className="hero-map min-h-[450px] max-h-[450px] md:min-h-[740px]" />

        <div className="relative z-20 flex flex-1 flex-col ">
          {/* 2xl:pb-9 */}
          <div className="flexCenter w-full flex-col ">
            {/* lg:bold-88 */}
            <h1 className="cooltext  py-8 xs:py-12 ">GaiJam</h1>
            {/* bold-52xl:bold-40 */}
            <p className="bold-20 sm:bold-26 text-black-100 md:bold-32 ">
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

      <section className="pt-3 max-container h-screen padding-container">
        <div className="relative z-20 flex flex-1 flex-col">
          {/* <div>{Background()}</div> */}
          <h1 className="cooltext2 pt-10">Автосервис</h1>
          <p className="bold-52 mt-3 text-black-100 ">
            Один из лучших сервисов Екатеринбурга в соотношении цена/качество
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
                ))}
            </div>

            <p className="bold-20  text-black-90">
              более 1к
              <span className="regular-20  ml-1">Довольных клиентов</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
