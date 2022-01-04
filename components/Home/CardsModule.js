import LargeLayout from '../Layout/LargeLayout';
import Image from 'next/image';
import Link from 'next/link';
import TestImage from '../../public/images/card.png';
import style from '../../styles/modules/_cards.module.scss';

export default function CardsModule() {
  return (
    <LargeLayout className="centered--section">
      <div className="center--bannner centered--section--header center--text grid--simple--spread">
        <h6 className="margin--bottom--xs">OUR PAST EVENTS</h6>
        <p className="overline">DISCOVER MORE</p>
      </div>
      <div className={style['card--spread']}>
        <div className={style['card--module']}>
          <a href="" className="display--block">
            <Image
              src={TestImage}
              width={200}
              height={380}
              alt={'Opportunity Image'}
            />
            <h2 className={style['centered']}>Test</h2>
            <p className={style['card--module--overline']}>
              <em>asdf</em>
            </p>
          </a>
        </div>
        <div className={style['card--module']}>
          <a href="" className="display--block">
            <Image
              src={TestImage}
              width={200}
              height={380}
              alt={'Opportunity Image'}
            />
            <h2 className={style['centered']}>Test</h2>
            <p className={style['card--module--overline']}>
              <em>asdf</em>
            </p>
          </a>
        </div>
        <div className={style['card--module']}>
          <a href="" className="display--block">
            <Image
              src={TestImage}
              width={200}
              height={380}
              alt={'Opportunity Image'}
            />
            <h2 className={style['centered']}>Test</h2>
            <p className={style['card--module--overline']}>
              <em>asdf</em>
            </p>
          </a>
        </div>
        <div className={style['card--module']}>
          <a href="" className="display--block">
            <Image
              src={TestImage}
              width={200}
              height={380}
              alt={'Opportunity Image'}
            />
            <h2 className={style['centered']}>Test</h2>
            <p className={style['card--module--overline']}>
              <em>asdf</em>
            </p>
          </a>
        </div>
      </div>
    </LargeLayout>
  );
}
