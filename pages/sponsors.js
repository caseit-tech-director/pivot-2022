import Testimonials from '../components/BannerComponents/testimonials';
import LargeHeader from '../components/Header/largeHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import dummyText from '../components/DummyText';

export default function Sponsors() {
  return (
    <body>
      <LargeHeader header={'Title'} overline={'Overline'} />
      <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
      <RegistrationModule header={'Title'} overline={'overline'} />
      <Testimonials/>
    </body>
  );
}
