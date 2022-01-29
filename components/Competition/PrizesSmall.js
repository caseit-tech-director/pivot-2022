import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';

export default function Prizes(props) {
  return (
    <div className={style['test']}>
      <div className={[style['cube--small'], style[props.class]].join(' ')}>
        <div
          className={[style['cube__face--small'], style[props.color], style['cube__face--front--small']].join(
            ' '
          )}
        >
          front
        </div>
        <div
          className={[style['cube__face--small'], style[props.color], style['cube__face--back--small']].join(' ')}
        >
          back
        </div>
        <div
          className={[style['cube__face--small'], style[props.color], style['cube__face--right--small']].join(
            ' '
          )}
        >
          right
        </div>
        <div
          className={[style['cube__face--small'], style[props.color], style['cube__face--left--small']].join(' ')}
        >
          left
        </div>
        <div
          className={[
            style['cube__face__short--small'], style[props.color],
            style['cube__face--top--small'],
          ].join(' ')}
        >
          top
        </div>
        <div
          className={[
            style['cube__face__short--small'], style[props.color],
            style['cube__face--bottom--small'],
          ].join(' ')}
        >
          bottom
        </div>
      </div>
      {/* <div className={[style['test--wrapper'], style[props.test]].join(' ')}>
        <PrizeDescription />
      </div> */}
    </div>
  );
}
