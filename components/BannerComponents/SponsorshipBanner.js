import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';
import Image from 'next/image';
// import testIMG from '../../public/images/square.jpg';
import accenture from '../../public/images/sponsors/accenture.jpg';
import cpa from '../../public/images/sponsors/cpa.jpg';
import ey from '../../public/images/sponsors/ey.jpg';
import thrive from '../../public/images/sponsors/thrive.jpg';
import salesforce from '../../public/images/sponsors/salesforce.jpg';
import tmp from '../../public/images/sponsors/TMP.jpg';

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
                  src={accenture}
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
                  src={thrive}
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
                  src={salesforce}
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
                  src={cpa}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={ey}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={tmp}
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
