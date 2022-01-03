import LargeHeader from '../components/Header/largeHeader';
import LocomotiveParagraph from '../components/locomotiveParagraph';
import Testimonials from '../components/SmallComponents/testimonials';
import SponsorshipBanner from '../components/SmallComponents/SponsorshipBanner';
export default function Home() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <body>
      <LargeHeader header={'Title'} overline={'Overline'} />
      <LocomotiveParagraph text={text} />
      <LocomotiveParagraph text={text} />
      <LocomotiveParagraph text={text} />
      <SponsorshipBanner/>
      <Testimonials/>
    </body>
  );
}
