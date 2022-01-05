import Image from 'next/image';
import { ContactMenuItems } from '../MenuItems/ContactMenuItems';
import { SocialMenuItems } from '../MenuItems/SocialMenuItems';

export default function ContactInformation() {
  return (
    <aside className="contact--information--wrapper">
      <h3>OUR INFORMATION</h3>
      <div className="contact--information">
        <ul>
          {ContactMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Image width={24} height={24} src={'/' + item.src} alt="test" />
                <a href={item.href}>
                  <caption>{item.contactInfo}</caption>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="social--media--information">
        <ul>
          {SocialMenuItems.map((item, index) => {
            return (
              <li key={index}>
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
