import MaxLayout from '../Layout/MaxLayout';
import ContactInformation from './ContactInformation';
import ContactForm from '../Contact/ContactForm';
import style from '../../styles/modules/_contact.module.scss';

export default function ContactSection() {
  return (
    <MaxLayout>
      <div className={style['contact--section--information--gc']}>
        <ContactInformation/>
      </div>
      <div className={style['contact--section--form--gc']}>
        <ContactForm/>
      </div>
    </MaxLayout>
  );
}
