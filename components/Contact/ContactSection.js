import ExtendableLayout from '../Layout/ExtendableLayout';
import ContactInformation from './ContactInformation';
import ContactForm from '../Contact/ContactForm';
import style from '../../styles/modules/_contact.module.scss';

export default function ContactSection() {
  return (
    <ExtendableLayout>
      <div className={style['contact--section--information--gc']}>
        <ContactInformation/>
      </div>
      <div className={style['contact--section--form--gc']}>
        <ContactForm/>
      </div>
    </ExtendableLayout>
  );
}
