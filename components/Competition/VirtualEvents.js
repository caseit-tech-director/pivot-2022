import MaxLayout from '../../components/Layout/MaxLayout';
import style from '../../styles/modules/_events.module.scss';
import Image from 'next/image';
import { VirtualEventItems } from '../MenuItems/VirtualEventItems';
import Event from '../Organisms/Competition/EventOrganism';

export default function EventOrganism() {
  return (
    <MaxLayout>
      <div className={style['virutal--events--container']}>
        <div className="section--header--wrapper flex--justify--center">
          <h2>Title</h2>
          <p className="overline">overline</p>
        </div>
        <div className={style['event--wrapper']}>
          {VirtualEventItems.map((item, index) => {
            return (
              <li className={style['flex--item']} key={index}>
                <Event
                  title={item.title}
                  sponsor={item.sponsor}
                  desc={item.description}
                />
              </li>
            );
          })}
        </div>
      </div>
    </MaxLayout>
  );
}
