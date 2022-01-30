import Testimonials from '../components/BannerComponents/testimonials';
// import SmallHeader from '../components/header/smallHeader';
import BranchHeaderLarge from '../components/Organisms/BranchHeaderLarge';
import RegistrationModule from '../components/Organisms/RegistrationModule';
import dummyText from '../components/DummyText';
import LargeHeader from '../components/header/largeHeader';
import VirtualEvents from '../components/Competition/VirtualEvents';
import LocomotiveParagraph from '../components/Molecules/locomotiveParagraph';
import Timer from '../components/Organisms/Timer';
import Prizes from '../components/Competition/Prizes';
import PrizeContainer from '../components/Competition/PrizeContainer';
import Sponsors from '../components/Competition/Sponsors';

export default function Competition() {
  return (
    <div className="bg-color--primary">
      <LargeHeader header={'competition'} overline={'Overline'} />
      <BranchHeaderLarge
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
      <PrizeContainer/>
      <Sponsors/>
      <LocomotiveParagraph
        text={'But this year we’re doing something different'}
      />
      {/* <VirtualEvents /> */}
      <Timer countdownTimestampMs={1644652800000} />
      {/* <div className="bg-color--white">
        <RegistrationModule header={'Title'} overline={'overline'} />
      </div> */}
      <Testimonials />
    </div>
  );
}
