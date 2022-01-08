import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import { MenuItems } from '../MenuItems/NavMenuItems';
import ZoomIcon from '../../public/images/icons8-zoom-48.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  // new:
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // new:
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles['nav--bg--extend']}>
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
          <Link href="/">
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
                <Link
                  to={'/' + item.href}
                  href={item.href}
                  smooth={true}
                  spy={true}
                  className={
                    (item.cName,
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + ' ' + styles.active)
                  }
                  onClick={openMenu}
                >
                  {item.title}
                </Link>
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
