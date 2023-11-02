import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* gap-20 py-10 md:gap-28 */}
      <section className="max-container padding-container flex flex-col  xl:flex-row min-h-[850px] max-h-[850px]">
        <div className="hero-map min-h-[450px] max-h-[450px] md:min-h-[800px]" />

        <div className="relative z-20 flex flex-1 flex-col ">
          {/* 2xl:pb-9 */}
          <div className="flexCenter w-full flex-col ">
            {/* lg:bold-88 */}
            <h1 className="cooltext bold-52 py-8 xs:py-12 md:bold-64">GaiJam</h1>
            {/* bold-52xl:bold-40 */}
            <p className="text-[16px] pt-10 font-[600] xs:bold-16 sm:bold-20 text-black-100 md:bold-26 lg:bold-40">
              Мы - единственная в Екатеринбурге многопрофильная компания, способная доставить машину
              комфорт класса по доступной цене.
            </p>

            <div className="my-11 flex flex-wrap gap-5 xxs:pt-8 md:pt-24 lg:pt-8">
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

      <section className="max-container h-screen padding-container">
        <div className="relative z-20 flex flex-1 flex-col">
          {/* <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
          <h1 className="cooltext bold-52 lg:bold-88">GaiJam</h1>
          <p className="bold-52 mt-3 text-black-100 ">
            Мы - единственная в Екатеринбурге многопрофильная компания, способная доставить машину
            комфорт класса по доступной цене.
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
