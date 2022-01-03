import SmallLayout from '../Layout/SmallLayout';
import style from '../../styles/modules/_banner.module.scss';
import BannerHeader from '../SmallComponents/BannerHeader';
import ArrowButton from '../ArrowButton';

export default function Testimonials(props) {
  return (
    <SmallLayout className="banner--wrapper">
        <BannerHeader title={"TESTIMONIALS"} overline={"PIVOT CASE COMPETITION"}/>
        <div className={style['testimonial--content']}>
          <h2 className="subtitle-2">NAME</h2>
          <p className="body-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odio consequuntur rerum velit, beatae a eaque quos iure est totam tempora nostrum labore numquam sit, ipsam libero suscipit, voluptates nihil.</p>
        </div>
        <div className={style['testimonial--cta--wrapper']}>
          <ArrowButton/>
        </div>
    </SmallLayout>
  );
}
