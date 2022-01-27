import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from '../../utilities/TimerUtils';
import style from '../../styles/modules/_timer.module.scss';

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
    <div className={style['countdown-timer']}>
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className={style['two-numbers']}>{remainingTime.hours}</span>
      <span>hours</span>
      <span className={style['two-numbers']}>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className={style['two-numbers']}>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
