import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from '../../utilities/TimerUtils';
import style from '../../styles/modules/_timer.module.scss';
import MaxLayout from '../Layout/MaxLayout';
import Button from '../../components/Molecules/button';
import Link from 'next/link';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <MaxLayout className="flex">
      <div className={style['container']}>
        <div className={style['countdown--timer']}>
          <div className={style['item--wrapper']}>
            <span className={style['item--overline']}>days</span>
            <span className={style['item--content']}>{remainingTime.days}</span>
          </div>
          <span className={style['item--divider']}>:</span>
          <div className={style['item--wrapper']}>
            <span className={style['item--overline']}>hours</span>
            <span className={style['item--content']}>
              {remainingTime.hours}
            </span>
          </div>
          <span className={style['item--divider']}>:</span>
          <div className={style['item--wrapper']}>
            <span className={style['item--overline']}>minutes</span>
            <span className={style['item--content']}>
              {remainingTime.minutes}
            </span>
          </div>
          <span className={style['item--divider']}>:</span>
          <div className={style['item--wrapper']}>
            <span className={style['item--overline']}>seconds</span>
            <span className={style['item--content']}>
              {remainingTime.seconds}
            </span>
          </div>
        </div>
        <div className={style['cta--wrapper']}>
          {/* <h6 className="margin--bottom--xs">props.header</h6>
        <p className="overline">props.overline</p> */}
          <div className={style['registration--cta--wrapper']}>
            <Link
              href={
                'https://www.surveymonkey.ca/r/pivot2022?utm_source=Survey+Monkey&utm_campaign=Application'
              }
            >
              <a className={[style['link--button']]}>REGISTER NOW</a>
            </Link>{' '}
          </div>
        </div>
      </div>
    </MaxLayout>
  );
};

export default CountdownTimer;
