import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente, totam velit
          iusto inventore adipisci. Aliquam repudiandae eveniet libero sed voluptatibus, dignissimos
          ex, nesciunt voluptates doloremque tenetur fugiat delectus ad laboriosam quia quasi nisi
          vero ipsam? Repudiandae, nobis rerum. Expedita, blanditiis ratione eos est, et placeat
          modi quis nam amet laudantium harum ducimus architecto. Libero esse impedit quasi culpa
          quam saepe. Animi hic, a quisquam nulla odit dignissimos facilis accusamus ipsum illo
          error quia consequuntur alias. Quaerat dicta sit, voluptatem reiciendis aliquam nobis
          quibusdam corrupti optio, labore itaque ea quos animi laudantium expedita eos soluta alias
          dignissimos accusamus praesentium illum ipsa repellat tempore consequuntur? Tenetur,
          consectetur laboriosam provident quasi quas minima sapiente hic! Ab hic ullam ea illo
          excepturi soluta sunt ratione architecto veritatis id recusandae, nemo, deserunt officiis
          molestias ad harum impedit voluptatum! Fuga, praesentium? Fugit, quisquam perspiciatis
          voluptatum dolorem omnis velit optio aliquam porro impedit nulla! Ipsa reiciendis ducimus
          nihil repellat labore nesciunt perspiciatis beatae eius eveniet sapiente, nemo quod error
          deserunt nam nulla! Deserunt ut quod qui quas natus voluptas expedita quae magni
          voluptates incidunt mag
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {/* {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
              ))} */}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
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

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
