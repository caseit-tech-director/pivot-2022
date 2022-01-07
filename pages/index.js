import LargeHeader from '../components/Header/largeHeader';
import LocomotiveParagraph from '../components/Molecules/locomotiveParagraph';
import Testimonials from '../components/BannerComponents/testimonials';
import SponsorshipBanner from '../components/BannerComponents/SponsorshipBanner';
import DiscoverOpportunities from '../components/Home/DiscoverOpportunities';
import CardsModule from '../components/Home/CardsModule';
import TextSwiper from '../components/Home/TextSwiper';
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
      <TextSwiper/>
      <DiscoverOpportunities/>
      <CardsModule/>
      <Testimonials/>
    </body>
  );
}
