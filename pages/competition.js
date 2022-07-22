import Testimonials from '../components/BannerComponents/testimonials';
import BranchHeaderLarge from '../components/Organisms/BranchHeaderLarge';
import LargeHeader from '../components/header/largeHeader';
import VirtualEvents from '../components/Competition/VirtualEvents';
import Timer from '../components/Organisms/Timer';
import PrizeContainer from '../components/Competition/PrizeContainer';
import Sponsors from '../components/Competition/SponsorsDiagram';
import BranchHeader from '../components/Organisms/BranchHeader';
export default function Competition() {
  return (
    <div className="bg-color--primary">
      <LargeHeader header={'competition'} overline={'ARE YOU READY?'} />
      <BranchHeaderLarge
        header={'PIVOT 2022'}
        overline={'Special Thanks'}
        paragraph={
          'Thank you to all our sponsors, this event would not be possible without you! We are so excited to be able to offer competitors the opportunity to connect with you.'
        }
      />
      <PrizeContainer />
      <Sponsors />
      <VirtualEvents />
      {/* <Timer countdownTimestampMs={1644652800000} /> */}
      <Testimonials />
    </div>
  );
}
