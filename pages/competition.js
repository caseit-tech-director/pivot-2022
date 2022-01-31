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
        header={'PIVOT 2022'}
        overline={'Special Thanks'}
        paragraph="Thank you to all our sponsors, this event would not be possible without you! We are so excited to be able to offer competitors the opportunity to connect with you."
      />
      <PrizeContainer/>
      <Sponsors/>
      <LocomotiveParagraph
        text={'But this year we’re doing something different'}
      />
      <VirtualEvents />
      <Timer countdownTimestampMs={1644652800000} />
      <Testimonials />
    </div>
  );
}
