import SmallHeader from '../components/Header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import dummyText from '../components/DummyText';
import ContactSection from '../components/Contact/ContactSection';

export default function Contact() {
  return (
    <body>
      <SmallHeader header={'Title'} overline={'Overline'} />
      <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
      <ContactSection/>
    </body>
  );
}
