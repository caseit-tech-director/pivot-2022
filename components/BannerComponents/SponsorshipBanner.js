import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';
import Image from 'next/image';
import testIMG from '../../public/images/square.jpg';
import lrgSponsor1 from '../../public/images/sponsors/accenture-title.png';
import lrgSponsor2 from '../../public/images/sponsors/cpa-networking.png';
import lrgSponsor3 from '../../public/images/sponsors/ey-networking.png';
import smSponsor1 from '../../public/images/sponsors/thrive-workshop.png';
import smSponsor2 from '../../public/images/sponsors/salesforce-workshop.jpeg';
import tmp from '../../public/images/sponsors/TMP-logo.png';

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
                  src={lrgSponsor1}
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
                  src={lrgSponsor2}
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
                  src={lrgSponsor3}
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
                  src={tmp}
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
                  src={smSponsor1}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={smSponsor2}
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
            {/* <MyImage></MyImage> */}
          </div>
        </div>
        {/* <div className={style['testimonial--cta--wrapper']}>
          <ArrowButton />
        </div> */}
      </MediumLayout>
    </div>
  );
}
