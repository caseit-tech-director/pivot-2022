import MenuItems from './MenuItems/ScheduleItems';
import MaxLayout from './Layout/MaxLayout';
import style from '../styles/modules/_schedule.module.scss';

export default function EventSchedule() {
  return (
    <MaxLayout>
      <div className={style['content--wrapper']}>
        <div
          className={[style['text--center'], style['margin--bottom--lrg']].join(
            ' '
          )}
        >
          <h6>Title</h6>
          <p className="overline">Overline</p>
        </div>

        <div className="schedule--item--wrapper">
          <div
            className={[
              style['bg--gray--200'],
              style['content--wrapper--title'],
              style['text--center'],
            ].join(' ')}
          >
            Main Schedule
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
                      <div className="flex--left">
                        <p className="event--title">{item.title}</p>
                        <p className="event--description">{item.desc}</p>
                      </div>
                      <div className="flex--right">
                        <h6 className="event--time">{item.time}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          </div>

          <div className="schedule--item--wrapper">
            <div
              className={[
                style['bg--gray--200'],
                style['content--wrapper--title'],
                style['text--center'],
              ].join(' ')}
            >
              Main Schedule
            </div>

            {/* Day two */}
            <div className="schedule--wrapper">
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
                        <div className="flex--left">
                          <p className="event--title">{item.title}</p>
                          <p className="event--description">{item.desc}</p>
                        </div>
                        <div className="flex--right">
                          <h6 className="event--time">{item.time}</h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              }
            </div>
            {/* End of day two */}

          </div>
        </div>
      </div>
    </MaxLayout>
  );
}
