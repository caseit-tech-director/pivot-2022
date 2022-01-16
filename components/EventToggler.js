import MenuItems from './MenuItems/ScheduleItems';
import style from '../styles/modules/_schedule.module.scss';
import React from 'react';

export default class EventToggler extends React.Component {
    
  render() {
    return (
      <div className={style['schedule--wrapper']}>
        {
          <div className={[style['flex--column'], style['']].join(' ')}>
            {MenuItems.DayOne.map((item, index) => {
              return (
                <div
                  className={[
                    style['flex--container'],
                    style['justify--between'],
                    style['item--wrapper'],
                    style['margin--bottom--sm'],
                  ].join(' ')}
                  key={index}
                >
                  <div className={style['event--wrapper']}>
                    <h5 className={style['event--title']}>{item.title}</h5>
                    <div className={style['event--description']}>
                      <button
                        id="toggle--description"
                        className={style['toggle--button']}
                      >
                        <div className={style['expand--icon']}></div>
                      </button>

                      <p>{item.desc}</p>

                      <div
                      >
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h6 className="event--time">{item.time}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}
