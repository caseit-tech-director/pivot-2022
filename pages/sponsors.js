import SmallHeader from '../components/header/smallHeader';
import BranchHeader from '../components/Organisms/BranchHeader';
import dummyText from '../components/DummyText';
import ContactSection from '../components/Contact/ContactSection';
import SponsorEvents from '../components/Sponsors/SponsorEvents';

export default function Sponsors() {
  return (
    <>
      <SmallHeader header={'sponsors'} overline={'PIVOT 2022 SPONSORS'} />
      <SponsorEvents/>
    </>
  );
}
