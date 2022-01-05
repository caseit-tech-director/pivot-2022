import BranchHeader from '../../components/Organisms/BranchHeader';
import dummyText from '../../components/DummyText';
import RegistrationModule from '../../components/Organisms/RegistrationModule';
import LargeHeader from '../../components/Header/largeHeader';
import Testimonials from '../../components/BannerComponents/testimonials';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { MenuItems } from '../../components/MenuItems/OrganizerMenuItems';
import style from '../../styles/modules/_organizer.module.scss';
import SideMenu from '../../components/Molecules/SideMenu';

export default function Orgaziners() {
  // remove
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const test = '../../public/images';
  
  return (
    <body>
      <LargeHeader header={'Title'} overline={'Overline'} />
      <BranchHeader
        header={'Title'}
        overline={'Overline'}
        paragraph={dummyText}
      />
      <section className={style['organizer--section--wrapper']}>
        <div className={style['organizer--gallery--wrapper']}>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    width={500}
                    height={500}
                    src={'/' + item.src}
                    alt="test"
                  />
                  <h5>
                    {item.name}
                  </h5>
                  <p className="overline">
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <SideMenu link1={"test"} link2={"test"} link3={"test"}/>
      </section>
      <RegistrationModule header={'Title'} overline={'overline'} />
      <Testimonials />
    </body>
  );
}
