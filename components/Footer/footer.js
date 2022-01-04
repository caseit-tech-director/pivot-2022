import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_footer.module.scss';
import MenuItems from '../MenuItems/FooterMenuItems';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <footer>
      <MediumLayout className="gb-2">
        <div className={style['footer--logo']}>
          <h3>pivot</h3>
        </div>
        <div className={style['footer--links--row']}>
          <div className={style['footer--links--wrapper']}>
            <div className={style['footer--links--h6']}>Competition</div>
            <div className={style['footer--links']}>
              <ul>
                {MenuItems.competition.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={'/' + item.href} href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style['footer--links--wrapper']}>
            <div className={style['footer--links--h6']}>Sponsorship</div>
            <div className={style['footer--links']}>
              <ul>
                {MenuItems.sponsorship.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={'/' + item.href} href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={style['footer--links--wrapper']}>
            <div className={style['footer--links--h6']}>About Us</div>
            <div className={style['footer--links']}>
              <ul>
                {MenuItems.about.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link to={'/' + item.href} href={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={style['footer--links--row']}>
          <div className={style['footer--links--wrapper']}>
            <div className={style['footer--links--h6']}>Follow Us!</div>
            <div className={style['footer--links']}>
              {/* Insert Social Media Here */}
            </div>
          </div>
        </div>
      </MediumLayout>
    </footer>
  );
}
