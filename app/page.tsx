import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 xl:flex-row">
        <div className="hero-map min-h-[850px] max-h-[850px] " />
        <div className="relative z-20 flex flex-1 flex-col ">
          <div className="flexCenter w-full flex-col 2xl:pb-9">
            <h1 className="cooltext bold-52 lg:bold-88">GaiJam</h1>
            <p className="bold-52 text-black-100 xl:bold-40">
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
