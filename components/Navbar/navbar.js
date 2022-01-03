import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import { MenuItems } from './MenuItems';
import ZoomIcon from '../../public/images/icons8-zoom-48.png';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  
  return (
    <>
      <nav 
      className={[styles['nav'], 
      styles['nav--grid'], 
      styles['base--nav']].join(' ')}
      >

        <div className="grid--align--left flex--inherit">
          <div className="img--contain icon--48 negative--margin--12--left margin--flush--right">
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
      {children}
    </>
  );
}
