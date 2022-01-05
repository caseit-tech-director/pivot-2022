import Image from 'next/image';
import { ContactMenuItems } from '../MenuItems/ContactMenuItems';
import { SocialMenuItems } from '../MenuItems/SocialMenuItems';
import style from '../../styles/modules/_contact.module.scss';

export default function ContactInformation() {
  return (
    <aside className="contact--information--wrapper">
      <h3 className={style['contact--information--header']}>OUR INFORMATION</h3>
      <div className="contact--information--wrapper">
        <ul className={style['contact--information']}>
          {ContactMenuItems.map((item, index) => {
            return (
              <li className={style['contact--information--item']} key={index}>
                <Image width={24} height={24} src={'/' + item.src} alt="test" />
                <a href={item.href}>
                  <caption>{item.contactInfo}</caption>
                </a>
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
                <Image width={24} height={24} src={'/' + item.src} alt="test" />
                <a href={item.href}>
                  <caption>{item.contactInfo}</caption>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
