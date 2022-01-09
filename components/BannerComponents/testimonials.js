import ExtraSmallLayout from '../Layout/ExtraSmallLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from './BannerHeader';
import ArrowButton from '../Molecules/ArrowButton';

export default function Testimonials(props) {
  return (
    <div className="bg-color--black">
      <ExtraSmallLayout className={style['testimonial--wrapper']}>
        <BannerHeader
          title={'TESTIMONIALS'}
          overline={'PIVOT CASE COMPETITION'}
        />
        <div id="testimonial" className={style['testimonial--content']}>
          <h2 className="subtitle-2">DORSA YOUSSEFI</h2>
          <p className="body-2">
            As a transfer student, Pivot was one of my first and most rewarding
            case competition experiences as I was able to test my BTM knowledge
            while learning about industry trends.
          </p>
        </div>
        <div className={style['testimonial--cta--wrapper']}>
          <ArrowButton />
        </div>
      </ExtraSmallLayout>
    </div>
  );
}
