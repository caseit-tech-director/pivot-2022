import BranchHeader from '../../components/Organisms/BranchHeader';
import dummyText from '../../components/DummyText';
import RegistrationModule from '../../components/Organisms/RegistrationModule';
import LargeHeader from '../../components/header/largeHeader';
import Testimonials from '../../components/BannerComponents/testimonials';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import MenuItems from '../../components/JSON/OrganizerMenuItems';

import style from '../../styles/modules/_organizer.module.scss';
import SideMenu from '../../components/Molecules/SideMenu';

import emily from '../../public/images/organizing-committee/douglas-headshot.jpeg';
import melissa from '../../public/images/organizing-committee/douglas-headshot.jpeg';
import esther from '../../public/images/organizing-committee/douglas-headshot.jpeg';
import justin from '../../public/images/organizing-committee/douglas-headshot.jpeg';
import douglas from '../../public/images/organizing-committee/douglas-headshot.jpeg';

export default function Orgaziners() {
  // remove
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const test = '../../public/images';

  return (
    <>
      <LargeHeader style="particle--contain" header={'organizing committee'} overline={'MEET THE TEAM'} />
      <BranchHeader
        header={'INTRODUCING'}
        overline={'THE PIVOT 2022 ORGANIZING COMMITTEE'}
        paragraph={
          'It is our pleasure to welcome you to PIVOT 2022! Thanks to the generous support of the Beedie School of Business at Simon Fraser University, our many sponsors, and our competitors, PIVOT has grown from its humble beginnings as an internal competition to engaging and inspiring students from across British Columbia. Are you ready to shift your thinking?'
        }
      />
      <section className={style['organizer--section--wrapper']}>
        <div className={style['organizer--gallery--wrapper']}>
          <ul>
            {MenuItems.Team2022.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    objectFit="cover"
                    width={500}
                    height={500}
                    src={'/' + item.src}
                    alt="test"
                  />
                  <h5>{item.name}</h5>
                  <p className="overline">{item.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <SideMenu
          subtitle={'All Years'}
          link1={'2022'}
          link2={'2021'}
          link3={'2020'}
          link4={'2019'}
          link5={'2018'}
        /> */}
      </section>
      <RegistrationModule header={'GET INVOLVED'} overline={'ARE YOU READY?'} />
      <Testimonials />
    </>
  );
}
