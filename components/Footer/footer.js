import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_footer.module.scss';
import MenuItems from '../JSON/FooterMenuItems';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <footer className="bg-color--primary">
      <MediumLayout>
        <div className={style['footer--logo']}>
          <h3>pivot</h3>
        </div>
        <div className={style['footer--links--row']}>
          <div className={style['footer--links--wrapper']}>
            <div className={style['footer--links--h6']}>
              <h6 className="subtitle-1 muted--text">Competition</h6>
            </div>
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
            <div className={style['footer--links--h6']}>
              <h6 className="subtitle-1 muted--text">About Us</h6>
            </div>
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
              <li className={style['social--media--item']}>
                <a href="https://www.instagram.com/pivotcasecompetition/">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/PIVOTCaseCompetition/">
                  <FaFacebookSquare size={24} />
                </a>
                <a href="https://www.linkedin.com/company/pivot-mis-case-competition/">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style['hr--wrapper']}>
          <hr />
          <hr />
          <hr />
        </div>
      </MediumLayout>
    </footer>
  );
}
