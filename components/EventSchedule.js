import MenuItems from './JSON/ScheduleItems';
import MaxLayout from './Layout/MaxLayout';
import style from '../styles/modules/_schedule.module.scss';
import { useState } from 'react';
import ShowEventDescription from './EventDescription/ShowEventDescription';

export default function EventSchedule() {
  return (
    <MaxLayout>
      <div className={style['content--wrapper']}>
        <div
          className={[
            style['text--center'],
            style['margin--bottom--lrg'],
            style['margin--top--lrg'],
          ].join(' ')}
        >
          <h6>PIVOT 2022 SCHEDULE</h6>
          <p className="overline">GET READY</p>
        </div>

        <div className="schedule--item--wrapper">
          <div className={style['schedule--wrapper']}>
            {
              <div className={[style['flex--column'], style['']].join(' ')}>
                <ShowEventDescription />
              </div>
            }
          </div>
        </div>
      </div>
      <div className={style['color--stroke--1']}>
        <div></div>
      </div>
      <div className={style['color--stroke--2']}>
        <div></div>
      </div>
      <div className={style['color--stroke--3']}>
        <div></div>
      </div>
    </MaxLayout>
  );
}
