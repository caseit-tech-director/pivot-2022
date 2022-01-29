import React, { Children, useState } from 'react';
import { render } from 'react-dom';
import EventDescription from './EventDescription';
import MenuItems from '../MenuItems/ScheduleItems';
import style from '../../styles/modules/_schedule.module.scss';

export default function ShowEventDescription() {
  const [toggleShow, setToggleShowed] = useState(true);
  function showToggle() {
    setToggleShowed(!toggleShow);
  }
  return (
    <div className="schedule--item--wrapper">
      <div
        className={[
          style['content--wrapper--title'],
          style['text--center'],
        ].join(' ')}
      >
        Day One
      </div>
      <div className={style['event--day--margin']}>
        <p className="body-2">
          {MenuItems.DayOne.map((eventInfo, index) => (
            <div
              key={index}
              className={
                'none' == eventInfo.fulldesc
                  // ? eventInfo.fulldesc.removeChild(element.firstChild)
                  // : // : style['inactive']
                    // eventInfo.fulldesc.removeChild(element.firstChild)
              }
            >
              <EventDescription key={index} eventInfo={eventInfo} />
            </div>
          ))}
        </p>
      </div>

      <div
        className={[
          style['content--wrapper--title'],
          style['text--center'],
        ].join(' ')}
      >
        Day Two
      </div>
      <div>
        <p className="body-2">
          {MenuItems.DayTwo.map((eventInfo, index) => (
            <div
              key={index}
              // className={
              //   'none' == eventInfo.fulldesc
              //     ? style['active']
              //     : style['inactive']
              // }
            >
              <EventDescription key={index} eventInfo={eventInfo} day={1} />
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}
