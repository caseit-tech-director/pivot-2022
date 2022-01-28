import ExtendableLayout from '../../components/Layout/ExtendableLayout';
import style from '../../styles/modules/_sponsors.module.scss';
import Image from 'next/image';
import TestImg from '../../public/images/sponsors/accenture.jpg';
export default function Sponsors() {
  return (
    <>
      <ExtendableLayout>
        <div className={style['content--wrapper']}>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h3>Title</h3>
              <Image
                width="200px"
                height="200px"
                src={TestImg}
                alt="test img"
              />
            </div>
          </div>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h3>Title</h3>
              <div className={style['items']}>
                <Image
                  width="200px"
                  height="200px"
                  src={TestImg}
                  alt="test img"
                />
                <Image
                  width="200px"
                  height="200px"
                  src={TestImg}
                  alt="test img"
                />
              </div>
            </div>
          </div>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h3>Title</h3>
              <div className={style['items']}>
                <Image
                  width="200px"
                  height="200px"
                  src={TestImg}
                  alt="test img"
                />
                <Image
                  width="200px"
                  height="200px"
                  src={TestImg}
                  alt="test img"
                />
                <Image
                  width="200px"
                  height="200px"
                  src={TestImg}
                  alt="test img"
                />
              </div>
            </div>
          </div>
        </div>
      </ExtendableLayout>
    </>
  );
}
