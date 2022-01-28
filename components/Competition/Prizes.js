import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';

export default function Prizes() {
  return (
    <>
      <MaxLayout className={style['container']}>
        <div className={style['container']}>
          <div className={style['scene']}>
            <div className={[style['cube'], style['cube1']].join(' ')}>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--front'],
                ].join(' ')}
              >
                front
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--back'],
                ].join(' ')}
              >
                back
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--right'],
                ].join(' ')}
              >
                right
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--left'],
                ].join(' ')}
              >
                left
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--top'],
                ].join(' ')}
              >
                top
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--bottom'],
                ].join(' ')}
              >
                bottom
              </div>
              {/* <button className={style['prize--toggle--button']}>+</button> */}
              {/* Testing button */}
              <PrizeDescription/>
            </div>
            <div className={[style['cube'], style['cube2']].join(' ')}>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--front'],
                ].join(' ')}
              >
                front
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--back'],
                ].join(' ')}
              >
                back
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--right'],
                ].join(' ')}
              >
                right
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--left'],
                ].join(' ')}
              >
                left
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--top'],
                ].join(' ')}
              >
                top
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--bottom'],
                ].join(' ')}
              >
                bottom
              </div>
              <button className={style['prize--toggle--button']}>+</button>
            </div>
            <div className={[style['cube'], style['cube3']].join(' ')}>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--front'],
                ].join(' ')}
              >
                front
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--back'],
                ].join(' ')}
              >
                back
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--right'],
                ].join(' ')}
              >
                right
              </div>
              <div
                className={[
                  style['cube__face'],
                  style['cube__face--left'],
                ].join(' ')}
              >
                left
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--top'],
                ].join(' ')}
              >
                top
              </div>
              <div
                className={[
                  style['cube__face__small'],
                  style['cube__face--bottom'],
                ].join(' ')}
              >
                bottom
              </div>
              <button className={style['prize--toggle--button']}>+</button>
            </div>
          </div>
        </div>
      </MaxLayout>
    </>
  );
}
