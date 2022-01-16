import Testimonials from '../components/BannerComponents/testimonials';
import smallHeader from '../components/header/smallHeader';
import SmallHeader from '../components/header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import dummyText from '../components/DummyText';
import Schedule from '../components/EventSchedule';

export default function Sponsors() {
  return (
    <>
      <SmallHeader header={'competition schedule'} overline={'GET READY'} />
      {/* <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      /> */}
      <Schedule/>
      <RegistrationModule header={'GET INVOLVED'} overline={'ARE YOU READY?'} />
      <Testimonials/>
    </>
  );
}
