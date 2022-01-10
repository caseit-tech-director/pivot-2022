import MaxLayout from '../Layout/MaxLayout';
import Judges from '../../public/images/text-slider/judges.jpg';
import Image from 'next/image';
import style from '../../styles/modules/_text-swiper.module.scss';

export default function TextSwiper() {
  return (
    <div className="bg-color--black">
      <MaxLayout>
        <div className={style['container']}>
          <div className={style['image--content']}>
            <Image alt={'test'} src={Judges}></Image>
          </div>
          <div className={style['text--content--wrapper']}>
            <div className={style['text--content']}>
              <h4>TAKE ON CHALLENGES</h4>
              <p className="body-2">
                Test your abilities to further your problem-solving skills and
                compete against a pool of qualified teams.
              </p>
            </div>
            <div className={style['text--content']}>
              <h4>WORK COLLABORATIVELY</h4>
              <p className="body-2">
                Solve a real-life business problem with your team and further
                your understanding of the rapidly-growing BTM industry
              </p>
            </div>
            <div className={style['text--content']}>
              <h4>FINE-TUNE YOUR SKILLS</h4>
              <p className="body-2">
                With our sponsored workshops, competitors will have the
                opportunity to learn from industry professionals and refine
                their case competition skills.
              </p>
            </div>
            <div className={style['text--content']}>
              <h4>EXPAND YOUR NETWORK</h4>
              <p className="body-2">
                Network with recruiters from top consulting firms, fast-growing
                startups, data-analytics companies and more.
              </p>
            </div>
          </div>
        </div>
      </MaxLayout>
    </div>
  );
}
