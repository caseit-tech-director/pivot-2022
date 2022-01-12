import HomeBanner from '../components/Home/HomeBanner';
import LocomotiveParagraph from '../components/Molecules/locomotiveParagraph';
import Testimonials from '../components/BannerComponents/testimonials';
import SponsorshipBanner from '../components/BannerComponents/SponsorshipBanner';
import DiscoverOpportunities from '../components/Home/DiscoverOpportunities';
import CardsModule from '../components/Home/CardsModule';
import TextSwiper from '../components/Home/TextSwiper';
import Particles from 'react-tsparticles';
import Particle from '../components/particle';

const particlesInit = () => {
  // console.log(main);
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = () => {
  console.log(container);
};
export default function Home() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <body>
      {/* <div className="particle--home--banner--container"> */}
        {/* <div id="container">
          <Particle />
        </div> */}
        <div className="dimmed"></div>
        <HomeBanner
          header={'pivot'}
          overline={'05 year anniversary'}
          paragraph={
            'British Columbia based business technology management case competition built for future business leaders'
          }
        />
        <LocomotiveParagraph
          text={
            'The local rendition of CaseIT, the world’s premier MIS business case competition.'
          }
        ></LocomotiveParagraph>
        <LocomotiveParagraph
          text={
            'Since 2018, PIVOT has welcomed over 400 competitors representing British Columbia’s various universities to compete in this rigorous and engaging competition.'
          }
        />
        <LocomotiveParagraph
          text={'But this year we’re doing something different'}
        />
      {/* </div> */}
      <TextSwiper />
      <DiscoverOpportunities
        caption1={'$1400 Prize Pool'}
        caption2={'Network with Industry Professionals'}
        caption3={'Virtual Events'}
      />
      <SponsorshipBanner />
      {/* <CardsModule /> */}
      <Testimonials />
    </body>
  );
}
