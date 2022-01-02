import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/modules/_nav.module.scss';
import DefaultButton from '../button';
import ZoomIcon from '../../images/icons8-zoom-48.png';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav
        className={[
          styles['nav'],
          styles['nav--grid'],
          styles['hidden--mobile'],
          styles['top--nav'],
        ].join(' ')}
      >
        <div className="grid--align--left flex">
          <div className="img--contain icon--48 negative--margin--12--left">
            <Image src={ZoomIcon} alt="Zoom Logo" />
          </div>
          <Link href="/">
              <div className="announcement--wrapper flex--inherit">
                <a className="overline">pivots going online</a>
              </div>
          </Link>
        </div>
        <div className={[styles['nav--menu--grid']].join(' ')}>
          <div className="flex--inherit">
            <p className="announcement--date overline">FEB 12 - FEB 13</p>
            <DefaultButton text={'SIGN UP'}></DefaultButton>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
