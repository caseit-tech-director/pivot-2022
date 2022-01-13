import Testimonials from '../components/BannerComponents/testimonials';
import LargeHeader from '../components/header/largeHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import dummyText from '../components/DummyText';
import Schedule from '../components/EventSchedule';

export default function Sponsors() {
  return (
    <body>
      <LargeHeader header={'competition schedule'} overline={'GET READY'} />
      {/* <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      /> */}
      <Schedule/>
      <RegistrationModule header={'Title'} overline={'overline'} />
      <Testimonials/>
    </body>
  );
}
