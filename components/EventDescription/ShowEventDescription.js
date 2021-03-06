import React, { Children, useState } from 'react';
import { render } from 'react-dom';
import EventDescription from './EventDescription';
import MenuItems from '../JSON/ScheduleItems';
import style from '../../styles/modules/_schedule.module.scss';

export default function ShowEventDescription() {
  const [toggleShow, setToggleShowed] = useState(true);
  function showToggle(e) {
    if (!(e.length > 0)) {
      e.toggled();
    }
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
          {MenuItems.DayOne.map((item, index) => (
            <li
              key={index}
              eventInfo={item}
              className={
                item.fulldesc.length > 0
                  ? [style['']].join(' ')
                  : [style['active']].join(' ')
              }
            >
              <EventDescription
                key={index}
                eventInfo={item}
                className={
                  item.fulldesc.length === 'none'
                    ? [style['']].join(' ')
                    : [style['active']].join(' ')
                }
              />
            </li>
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
      <div className={style['']}>
        <p className="body-2">
          {MenuItems.DayTwo.map((item, index) => (
            <li
              key={index}
              eventInfo={item}
              className={
                item.fulldesc.length > 0
                  ? [style['']].join(' ')
                  : [style['active']].join(' ')
              }
            >
              <EventDescription
                key={index}
                eventInfo={item}
                className={
                  item.fulldesc.length === 'none'
                    ? [style['']].join(' ')
                    : [style['active']].join(' ')
                }
              />
            </li>
          ))}
        </p>
      </div>
    </div>
  );
}
