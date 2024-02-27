import Image from 'next/image';
import Link from 'next/link';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link href="/">
      <Image className={styles.logo_image} src="/logo.png" alt="logo" width={120} height={65} />
    </Link>
  );
};

export default Logo;
