import Image from 'next/image';
import { ContactMenuItems } from '../JSON/ContactMenuItems';
import { SocialMenuItems } from '../JSON/SocialMenuItems';
import style from '../../styles/modules/_contact.module.scss';
import { FaMapMarkerAlt, FaInstagram, FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

import { FiMail } from 'react-icons/fi';

export default function ContactInformation() {
  return (
    <aside className="contact--information--wrapper">
      <h3 className={style['contact--information--header']}>OUR INFORMATION</h3>
      <div className="contact--information--wrapper">
        <ul className={style['contact--information']}>
          {ContactMenuItems.map((item, index) => {
            return (
              <li className={style['contact--information--item']} key={index}>
                <div
                  className={
                    'location' == item.name
                      ? style['active']
                      : style['inactive']
                  }
                >
                  <FaMapMarkerAlt className="flex" />
                </div>
                <div
                  className={
                    'mail' == item.name ? style['active'] : style['inactive']
                  }
                >
                  <FiMail className="flex" />
                </div>
                <caption>{item.contactInfo}</caption>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style['social--media--information--wrapper']}>
        <div className={style['social--media--title--wrapper']}>
          <h6 className="subtitle-1">Follow Us!</h6>
        </div>
        <ul className={style['social--media--item--wrapper']}>
          {SocialMenuItems.map((item, index) => {
            return (
              <li className={style['social--media--item']} key={index}>
                <a href={item.href}>
                  <div
                    className={
                      'instagram' == item.name
                        ? style['active']
                        : style['inactive']
                    }
                  >
                    <FaInstagram/>
                  </div>
                  <div
                    className={
                      'facebook' == item.name ? style['active'] : style['inactive']
                    }
                  >
                    <FaFacebookSquare/>
                  </div>
                  <div
                    className={
                      'linkedin' == item.name ? style['active'] : style['inactive']
                    }
                  >
                    <FaLinkedinIn/>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
