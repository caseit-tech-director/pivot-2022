import SmallLayout from '../Layout/SmallLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';
import Image from 'next/image';

// Title Sponsor(s)
import Accenture from '../../public/images/sponsors/jpg/accenture.jpg';

// Workshop Sponsor(s)
import SalesForce from '../../public/images/sponsors/jpg/Salesforce.jpg';
import Thrive from '../../public/images/sponsors/jpg/thrive.jpg';

// Networking Sponsor(s)
import CGI from '../../public/images/sponsors/jpg/CGI.jpg';
import CPA from '../../public/images/sponsors/jpg/CPA.jpg';
import Microsoft from '../../public/images/sponsors/jpg/microsoft.jpeg';

import EY from '../../public/images/sponsors/jpg/EY.jpg';
import SAP from '../../public/images/sponsors/jpg/SAP.jpg';
import TMP from '../../public/images/sponsors/jpg/TMP.jpg';

export default function SponsorshipBanner(props) {
  return (
    <div className="bg-color--black--secondary">
      <SmallLayout className="banner--wrapper">
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
              <h2 className="subtitle-2">Workshop Sponsor</h2>
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
              <h2 className="subtitle-2">Workshop Sponsor</h2>
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
              <div className={style['sponsor--content--item']}>
                <Image
                  objectFit="contain"
                  src={Microsoft}
                  width={84}
                  height={84}
                  alt="Sponsor"
                />
              </div>
            </div>
            <h2 className="subtitle-2">Networking Sponsors</h2>
          </div>

        <div className="grid--span--2 vertical--align">
          <ArrowButton className="grid--align--right" text={'Learn More'} />
        </div>
        </div>
      </SmallLayout>
    </div>
  );
}
