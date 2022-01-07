import MaxLayout from '../Layout/MaxLayout';
import testImage from '../../public/images/rect-4x3.jpg';
import Image from 'next/image';
import style from '../../styles/modules/_text-swiper.module.scss';

export default function TextSwiper() {
  return (
    <MaxLayout>
      <div className={style['container']}>
        {/* 
                  Width: 50% of container
                  Height: 100% of container
          */}
        <div className={style['image--content']}>
          <div className={style['image--container']}>
            <Image src={testImage}></Image>
          </div>
        </div>
        <div className={style['text--content--wrapper']}>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque odio amet temporibus labore aliquam laboriosam in
              pariatur
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque odio amet temporibus labore aliquam laboriosam in
              pariatur
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque odio amet temporibus labore aliquam laboriosam in
              pariatur
            </p>
          </div>
          <div className={style['text--content']}>
            <h4>Title</h4>
            <p className="body-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque odio amet temporibus labore aliquam laboriosam in
              pariatur
            </p>
          </div>
        </div>
      </div>
    </MaxLayout>
  );
}
