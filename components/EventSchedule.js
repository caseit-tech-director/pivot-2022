import MenuItems from './MenuItems/ScheduleItems';
import MaxLayout from './Layout/MaxLayout';
import style from '../styles/modules/_schedule.module.scss';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import Toggler from '../components/EventToggler';
import DemoTest from './Demo/DemoTest';

export default function EventSchedule() {
  const [showMe, setShowMe] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

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
          <div
            className={[
              style['content--wrapper--title'],
              style['text--center'],
            ].join(' ')}
          >
            Day One
          </div>
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
                            onClick={() => toggle()}
                            id="toggle--description"
                            className={style['toggle--button']}
                          >
                            <div className={style['expand--icon']}></div>
                          </button>

                          <p 
                            style={{
                              display: showMe ? 'block' : 'none',
                            }}
                          >
                            {item.desc}
                          </p>

                          <div >{item.time}</div>
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
          <Toggler />
          <DemoTest />
        </div>
      </div>
    </MaxLayout>
  );
}
