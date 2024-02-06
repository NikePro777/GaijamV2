import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image className="logo-image" src="/logo.png" alt="logo" width={74} height={29} />
    </Link>
  );
};

export default Logo;
