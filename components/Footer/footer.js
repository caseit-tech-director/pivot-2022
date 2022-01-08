import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_footer.module.scss';
import MenuItems from '../MenuItems/FooterMenuItems';
import { SocialMenuItems } from '../MenuItems/SocialMenuItems';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <footer className="gb-2">
      <MediumLayout>
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
            <ul className={style['social--media--item--wrapper']}>
              {SocialMenuItems.map((item, index) => {
                return (
                  <li className={style['social--media--item']} key={index}>
                    <a href={item.href}>
                      <Image
                        width={24}
                        height={24}
                        src={'/' + item.src}
                        alt="test"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </MediumLayout>
    </footer>
  );
}
