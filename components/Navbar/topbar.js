/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import ZoomIcon from '../../public/images/icons8-zoom-48.png';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div
      className={[
        styles['nav--bg--extend'],
        styles['display--none--topbar--mobile'],
      ].join(' ')}
    >
      <nav
        className={[
          styles['nav'],
          styles['nav--grid'],
          styles['hidden--mobile'],
          styles['top--nav'],
        ].join(' ')}
      >
        <div className="grid--align--left flex">
          <div className="img--contain icon--48 margin--left--reset margin--right--xs">
            <Image src={ZoomIcon} alt="Zoom Logo" />
          </div>
          <Link
            href={{
              pathname: '/',
              query: { name: 'test' },
            }}
          >
            <div className="announcement--wrapper flex--inherit ">
              <a className="overline">PIVOT&apos;s GOING ONLINE</a>
            </div>
          </Link>
        </div>
        <div className={[styles['nav--menu--grid']].join(' ')}>
          <div className="flex--inherit">
            <p className="announcement--date overline">FEB 12 - FEB 13</p>
            <Link href="https://bit.ly/3G8pjJc">
              <a className={[styles['link--button']]}>SIGN UP</a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
