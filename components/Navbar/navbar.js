import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import { MenuItems } from '../MenuItems/NavMenuItems';
import ZoomIcon from '../../public/images/icons8-zoom-48.png';
import { debounce } from '../../utilities/helpers';
import Topbar from './topbar';
import { useRouter } from 'next/router';
import Router from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  const navbarStyles = {
    position: 'fixed',
    width: '100%',
    textAlign: 'center',
    // new:
    transition: 'top 0.6s',
  };

  const router = useRouter();

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <div
      style={{ ...navbarStyles, top: visible ? '0' : '-48px' }}
      className={[
        styles['nav--bg--extend'],
        styles['display--none--desktop-nav--mobile'],
      ].join(' ')}
    >
      <Topbar />
      <nav
        className={[
          styles['nav'],
          styles['nav--grid'],
          styles['base--nav'],
        ].join(' ')}
      >
        <div className="grid--align--left flex--inherit">
          <div className="img--contain icon--48 margin--left--reset margin--right--xs">
            <Image src={ZoomIcon} alt="Zoom Logo" />
          </div>
          <Link passHref={true} href="/">
            <div className="margin--flush--left flex--inherit">
              <a className="top--bar--announcement">PIVOT CASE COMPETITION</a>
            </div>
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? [styles['nav--menu'], styles['nav--menu--grid']].join(' ')
              : styles['nav--menu'] + ' ' + styles.active
          }
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={router.pathname == item.pName ? styles['active'] : ''}>
                  <Link
                    to={'/' + item.href}
                    href={item.href}
                    passHref={true}
                    smooth={true}
                    spy={true}
                    onClick={openMenu}
                  >
                    {item.title}
                  </Link>
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + ' ' + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
