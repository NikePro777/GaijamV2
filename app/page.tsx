import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="max-container  padding-container flex flex-col gap-20  md:gap-28  xl:flex-row ">
        <div className="hero-map min-h-min" />

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

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            {/* <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />*/}
          </div>
        </div>
        <div />
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

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            {/* <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />*/}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <div className="relative flex flex-1 items-center">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */
}
//       </div>
//       <p className="bold-20 text-white">Aguas Calientes</p>
//     </div>

//     <div className="flexBetween">
//       <div className="flex flex-col">
//         <p className="regular-16 block text-gray-20">Distance</p>
//         <p className="bold-20 text-white">173.28 mi</p>
//       </div>
//       <div className="flex flex-col">
//         <p className="regular-16 block text-gray-20">Elevation</p>
//         <p className="bold-20 text-white">2.040 km</p>
//       </div>
//     </div>
//   </div>
// </div> */}
