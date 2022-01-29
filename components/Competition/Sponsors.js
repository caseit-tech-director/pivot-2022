import ExtendableLayout from '../../components/Layout/ExtendableLayout';
import style from '../../styles/modules/_sponsors.module.scss';
import Image from 'next/image';
import TestImg from '../../public/images/sponsors/accenture.jpg';
export default function Sponsors() {
  return (
    <>
      <ExtendableLayout>
      <div className="section--header--wrapper flex--justify--center">
        <h2>Sponsors</h2>
        <p className="overline">PIVOT | COMPETITION</p>
      </div>
        <div className={style['content--wrapper']}>
          <div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>Title Sponsor</h5>
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
              <h5>Workshop Sponsors</h5>
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
              <h5>Networking Sponsors</h5>
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
          </div><div className={style['item--wrapper']}>
            <div className={style['item--contain']}>
              <h5>In Kind Sponsors</h5>
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
