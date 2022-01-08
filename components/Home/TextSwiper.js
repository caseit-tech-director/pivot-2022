import MaxLayout from '../Layout/MaxLayout';
import testImage from '../../public/images/rect-4x3.jpg';
import Image from 'next/image';
import style from '../../styles/modules/_text-swiper.module.scss';

export default function TextSwiper() {
  return (
    <MaxLayout>
      <div className={style['container']}>
        <div className={style['image--content']}>
          <div className={style['image--container']}>
            <Image alt={"test"} src={testImage}></Image>
          </div>
        </div>
        <div className={style['text--content--wrapper']}>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Test your abilities to further your problem-solving skills and
              compete against a pool of qualified teams.
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Solve a real-life business problem with your team and further your
              understanding of the rapidly-growing BTM industry
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              With our sponsored workshops, competitors will have the
              opportunity to learn from industry professionals and refine their
              case competition skills.
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Network with recruiters from top consulting firms, fast-growing
              startups, data-analytics companies and more.
            </p>
          </div>
        </div>
      </div>
    </MaxLayout>
  );
}
