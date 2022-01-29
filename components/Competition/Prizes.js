import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';

export default function Prizes(props) {
  return (
    <div className={style['test']}>
      <div className={[style['cube'], style[props.class]].join(' ')}>
        <div
          className={[style['cube__face'], style['cube__face--front']].join(
            ' '
          )}
        >
          front
        </div>
        <div
          className={[style['cube__face'], style['cube__face--back']].join(' ')}
        >
          back
        </div>
        <div
          className={[style['cube__face'], style['cube__face--right']].join(
            ' '
          )}
        >
          right
        </div>
        <div
          className={[style['cube__face'], style['cube__face--left']].join(' ')}
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
      </div>
      <PrizeDescription />
    </div>
  );
}
