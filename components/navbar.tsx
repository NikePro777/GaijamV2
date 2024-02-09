'use client';

import Link from 'next/link';
import { useMediaQuery } from '@/hooks';
import { useState } from 'react';
import stylesMenu from '@/styles/mobileMenu.module.scss';
import styles from '@/styles/header.module.scss';
import Logo from './Logo';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Главная' },
  { href: '/avto', key: 'avtopark', label: 'Автоподбор' },
  { href: '/taxi', key: 'taxopark', label: 'Таксопарк' },
  { href: '/service', key: 'services ', label: 'Автосервис' },
  { href: '/about', key: 'contact_us', label: 'Автокомплекс' },
];

const Navbar = () => {
  const isMobile = useMediaQuery(801);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
    setMenuOpen(false);
  };

  const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        {/* <header className="flexBetween max-container px-10 md:px-0 md1:padding-container relative z-30 py-2 lg:py-5"> */}
        <Logo />
        {isMobile && (
          <button
            onClick={handleToggleMenu}
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}>
            <span />
            <span />
            <span />
          </button>
        )}
        <nav
          className={`${isMobile ? stylesMenu.menu : styles.header__nav} ${
            menuOpen ? stylesMenu.open : ''
          }`}>
          <ul className={`${isMobile ? styles.list_reset : styles.header__nav__list}`}>
            {/* <ul className="hidden h-full md:gap-5 lg:gap-10 xl:gap-12 md:flex"> </ul>*/}

            {NAV_LINKS.map((link) => (
              <li className={currentMenuItemClass} key={link.key}>
                <Link
                  href={link.href}
                  // key={link.key}
                  className={styles.header__nav__list__item__link}
                  onClick={closeMenu}>
                  {/* className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" */}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
