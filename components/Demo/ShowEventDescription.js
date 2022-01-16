import React, { useState } from 'react';
import { render } from 'react-dom';
import EventDescription from './EventDescription';
import MenuItems from '../MenuItems/ScheduleItems';
import style from '../../styles/modules/_schedule.module.scss';

export default function ShowEventDescription() {
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
      {MenuItems.DayOne.map((eventInfo, index) => (
        <EventDescription key={index} eventInfo={eventInfo} />
      ))}

      <div
        className={[
          style['content--wrapper--title'],
          style['text--center'],
        ].join(' ')}
      >
        Day Two
      </div>
      {MenuItems.DayTwo.map((eventInfo, index) => (
        <EventDescription key={index} eventInfo={eventInfo} day={1} />
      ))}
    </div>
  );
}
