import SmallHeader from '../components/header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import dummyText from '../components/DummyText';
import ContactSection from '../components/Contact/ContactSection';

export default function Contact() {
  return (
    <body>
      <SmallHeader header={'contact'} overline={'GET MORE INFORMATION'} />
      <ContactSection/>
    </body>
  );
}
