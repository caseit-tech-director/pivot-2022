import Testimonials from '../components/BannerComponents/testimonials';
import SmallHeader from '../components/header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import dummyText from '../components/DummyText';

export default function Competition() {
  return (
    <>
      <SmallHeader header={'competition'} overline={'Overline'} />
      <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
      <RegistrationModule header={'Title'} overline={'overline'} />
      <Testimonials/>
    </>
  );
}
