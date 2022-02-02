import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';
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

export default function SponsorshipBanner(props) {
  return (
    <div className="bg-color--black--secondary">
      <MediumLayout className="banner--wrapper">
        <BannerHeader title={'SPONSORS'} overline={'PIVOT CASE COMPETITION'} />
        <div className={style['sponsor--content']}>
          <div
            className={[
              style['sponsor--content--row'],
              style['banner--title--sponsors'],
            ].join(' ')}
          >
            <div className={style['sponsor--content--item--wrapper']}>
              <div className={style['sponsor--image--wrapper']}>
                <Image
                  objectFit="contain"
                  src={Accenture}
                  width={128}
                  height={128}
                  alt="Sponsor"
                />
              </div>
              <h2 className="subtitle-2">Title Sponsor</h2>
            </div>

            <div className={style['sponsor--content--item--wrapper']}>
              <div className={style['sponsor--image--wrapper']}>
                <Image
                  objectFit="contain"
                  src={Thrive}
                  width={128}
                  height={128}
                  alt="Sponsor"
                />
              </div>
              <h2 className="subtitle-2">Networking Sponsor</h2>
            </div>

            <div className={style['sponsor--content--item--wrapper']}>
              <div className={style['sponsor--image--wrapper']}>
                <Image
                  objectFit="contain"
                  src={SalesForce}
                  width={128}
                  height={128}
                  alt="Sponsor"
                />
              </div>
              <h2 className="subtitle-2">Networking Sponsor</h2>
            </div>
          </div>

          <div
            className={[
              style['sponsor--content--row'],
              style['banner--title--sponsors'],
              style['sponsor--content--row--2'],
            ].join(' ')}
          >
            <div className={style['tier2--wrapper']}>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={CPA}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={EY}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={TMP}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={SAP}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={CGI}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
            </div>
            <h2 className="subtitle-2">Workshop Sponsors</h2>
          </div>
          <div
            className={[
              style['sponsor--content--row'],
              style['banner--in--kind--sponsors'],
            ].join(' ')}
          >
            <div
              className={[
                style['sponsor--content--row'],
                style['banner--title--sponsors'],
                style['sponsor--content--row--2'],
              ].join(' ')}
            >
              <div className={style['tier2--wrapper']}>
                <div className={style['sponsor--content--item']}>
                  <Image
                    objectFit="contain"
                    src={EVO}
                    width={50}
                    height={50}
                    alt="Sponsor"
                  />
                </div>
                <div className={style['sponsor--content--item']}>
                  <Image
                    objectFit="contain"
                    src={ScienceWorld}
                    width={50}
                    height={50}
                    alt="Sponsor"
                  />
                </div>
                <div className={style['sponsor--content--item']}>
                  <Image
                    objectFit="contain"
                    src={StevesPoke}
                    width={50}
                    height={50}
                    alt="Sponsor"
                  />
                </div>
                <div className={style['sponsor--content--item']}>
                  <Image
                    objectFit="contain"
                    src={StickerMule}
                    width={50}
                    height={50}
                    alt="Sponsor"
                  />
                </div>
                <div className={style['sponsor--content--item']}>
                  <Image
                    objectFit="contain"
                    src={MYST}
                    width={50}
                    height={50}
                    alt="Sponsor"
                  />
                </div>
              </div>
              <h2 className="subtitle-2">Workshop Sponsors</h2>
            </div>
          </div>
        </div>
        {/* <div className={style['testimonial--cta--wrapper']}>
          <ArrowButton />
        </div> */}
      </MediumLayout>
    </div>
  );
}
