import MediumLayout from '../Layout/MediumLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';
import Image from 'next/image';
import testIMG from '../../public/images/square.jpg';

export default function SponsorshipBanner(props) {
  return (
    <div className="bg-color--black">
      <MediumLayout className="banner--wrapper">
        <BannerHeader title={'SPONSORS'} overline={'PIVOT CASE COMPETITION'} />
        <div className={style['sponsor--content']}>
          <div
            className={[
              style['sponsor--content--row'],
              style['banner--title--sponsors'],
            ].join(' ')}
          >
            <Image src={testIMG} width={128} height={128} alt="Sponsor" />
            <Image src={testIMG} width={128} height={128} alt="Sponsor" />
            <Image src={testIMG} width={128} height={128} alt="Sponsor" />
            <h2 className="subtitle-2">Title Sponsors</h2>
          </div>
          <div
            className={[
              style['sponsor--content--row'],
              style['banner--title--sponsors'],
            ].join(' ')}
          >
            <Image src={testIMG} width={84} height={84} alt="Sponsor" />
            <Image src={testIMG} width={84} height={84} alt="Sponsor" />
            <Image src={testIMG} width={84} height={84} alt="Sponsor" />
            <h2 className="subtitle-2">Title Sponsors</h2>
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
