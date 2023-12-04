import Image from 'next/image';

type CardProps = {
  link: string;
  title: string;
  text: string;
};

const Card = ({ link, title, text }: CardProps) => {
  return (
    <div className="w-280 text-center mb-65 transition duration-200 ease-in-out">
      <Image className="w-260" width={260} height={100} src={link} alt="Ваше изображение" />
      <h4 className="text-20 font-bold tracking-wider mb-20">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Card;
