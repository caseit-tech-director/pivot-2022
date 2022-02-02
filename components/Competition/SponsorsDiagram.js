import ExtendableLayout from '../Layout/ExtendableLayout';
import style from '../../styles/modules/_sponsors.module.scss';
import Image from 'next/image';

// Title Sponsor(s)
import Accenture from '../../public/images/sponsors/accenture.jpg';

// Workshop Sponsor(s)
import SalesForce from '../../public/images/sponsors/Salesforce.jpg';
import Thrive from '../../public/images/sponsors/thrive.jpg';

// Networking Sponsor(s)
import CGI from '../../public/images/sponsors/network/CGI_logo_color_rgb.png';
import CPA from '../../public/images/sponsors/network/cpa-bc-logo.png';
import EY from '../../public/images/sponsors/network/ey-logo.png';
import SAP from '../../public/images/sponsors/network/SAP-logo.png';
import TMP from '../../public/images/sponsors/network/TMP-logo.png';

// In Kind Sponsor(s)
import EVO from '../../public/images/sponsors/in-kind/Evo_logo_TMRGB.jpg';
import ScienceWorld from '../../public/images/sponsors/in-kind/ScienceWorld/1_Black/CMYK/SW_logo_richblack_cmyk.png';
import StevesPoke from '../../public/images/sponsors/in-kind/steves-poke-bar.png';
import StickerMule from '../../public/images/sponsors/in-kind/sticker-mule-logo-light-stacked.png';
import MYST from '../../public/images/sponsors/in-kind/VAN_MYST_LOGO_FINALv5_HORIZONTAL-LOGO600px.png';

export default function Sponsors() {
  return (
    <>
      <ExtendableLayout>
        <div className="section--header--wrapper flex--justify--center">
          <h2>Sponsors</h2>
          <p className="overline">PIVOT | COMPETITION</p>
        </div>
        <div className={style['content--wrapper']}>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>Title Sponsor</h5>
              <div className="sponsor--image--wrapper">
                <Image
                  className={style['image--item']}
                  width="200px"
                  height="200px"
                  objectFit="cover"
                  layout="intrinsic"
                  src={Accenture}
                  alt="test img"
                />
              </div>
            </div>
          </div>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>Workshop Sponsors</h5>
              <div className={style['items']}>
                <div className="sponsor--image--wrapper">
                  <Image
                    width="175px"
                    height="175px"
                    objectFit="cover"
                    layout="intrinsic"
                    src={Thrive}
                    alt="test img"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="175px"
                    height="175px"
                    objectFit="cover"
                    layout="intrinsic"
                    src={SalesForce}
                    alt="test img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>Networking Sponsors</h5>
              <div className={style['items']}>
                <div className="sponsor--image--wrapper">
                  <Image
                    objectFit="contain"
                    layout="intrinsic"
                    width="150px"
                    height="150px"
                    src={EY}
                    alt="test img"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="150px"
                    height="150px"
                    layout="intrinsic"
                    objectFit="contain"
                    src={CGI}
                    alt="test img"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="150px"
                    height="150px"
                    src={SAP}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="150px"
                    height="150px"
                    src={CPA}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="150px"
                    height="150px"
                    src={TMP}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>In Kind Sponsors</h5>
              <div className={style['items']}>
                <div className="sponsor--image--wrapper">
                  <Image
                    width="100px"
                    height="100px"
                    src={EVO}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="100px"
                    height="100px"
                    src={ScienceWorld}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="100px"
                    height="100px"
                    src={StevesPoke}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="100px"
                    height="100px"
                    src={StickerMule}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>

                <div className="sponsor--image--wrapper">
                  <Image
                    width="100px"
                    height="100px"
                    src={MYST}
                    alt="test img"
                    layout="intrinsic"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExtendableLayout>
    </>
  );
}
