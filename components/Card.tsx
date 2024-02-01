import Image from 'next/image';

type CardProps = {
  link: string;
  title: string;
  text: string;
  height?: number;
  weight?: number;
};

const Card = ({ link, title, text, height = 225, weight = 260 }: CardProps) => {
  const CN = `w-[${weight}px] blockCenter h-[${height}px]`;
  return (
    <div className="md:w-[300px] mb-7 text-center blockCenter transition duration-200 ease-in-out ">
      <Image className={CN} width={weight} height={height} src={link} alt="Ваше изображение" />

      <h4 className="bold-x tracking-wider my-3">{title}</h4>
      <p className="w-full">{text}</p>
    </div>
  );
};

export default Card;
