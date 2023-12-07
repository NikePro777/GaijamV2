import Image from 'next/image';

type CardProps = {
  link: string;
  title: string;
  text: string;
};

const Card = ({ link, title, text }: CardProps) => {
  return (
    <div className="md:w-[300px] w-[500px] mb-7 text-center blockCenter transition duration-200 ease-in-out">
      <Image
        className="w-[260px] blockCenter h-[225px]"
        width={260}
        height={225}
        src={link}
        alt="Ваше изображение"
      />
      <h4 className="bold-x tracking-wider mb-1">{title}</h4>
      <p className="w-full">{text}</p>
    </div>
  );
};

export default Card;
