import Image from 'next/image';
import Link from 'next/link';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Главная' },
  { href: '/avto', key: 'avtopark', label: 'Автоподбор' },
  { href: '/taxi', key: 'taxopark', label: 'Таксопарк' },
  { href: '/service', key: 'services ', label: 'Автосервис' },
  { href: '/about', key: 'contact_us', label: 'г.Екатеринбург, ул. Пехотинцев 4' },
];

const Navbar = () => {
  return (
    <header className="flexBetween max-container px-10 md:px-0 md1:padding-container relative z-30 py-2 lg:py-5">
      <Link href="/">
        <Image className="logo-image" src="/logo.png" alt="logo" width={74} height={29} />
      </Link>

      <nav>
        <ul className="hidden h-full md:gap-5 lg:gap-10 xl:gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>

      {/* <div className="lg:flexCenter hidden">
        <p>button</p>
      </div> */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden"
      />
    </header>
  );
};

export default Navbar;
