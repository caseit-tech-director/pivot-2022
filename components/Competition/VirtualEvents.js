import MaxLayout from '../../components/Layout/MaxLayout';
import style from '../../styles/modules/_events.module.scss';
import Image from 'next/image';
import { VirtualEventItems } from '../JSON/VirtualEventItems';
import Event from '../Organisms/Competition/EventOrganism';

import VirtualEventContent from '../Molecules/VirtualEventContent';
import Button from '../Molecules/SideMenu';
import items from '../JSON/VirtualEventItems';
import { useState } from 'react';

const allCategories = [
  'All Events',
  ...new Set(items.map((item) => item.category)),
];
// const allCategories = [ ...new Set(items.map((item) => item.category))];

console.log(allCategories);

export default function EventOrganism() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === 'All Events') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <MaxLayout>
      <div
        id="virtualEvents"
        className={[style['virutal--events--container'], style['']].join(' ')}
      >
        <div className="margin--bottom--lrg">
          <h2>Virtual Events</h2>
          <p className="overline">PIVOT | Competition</p>
        </div>

        <div className={style['event--wrapper']}>
          <div className={style['content--container']}>
            <VirtualEventContent menuItem={menuItem} />
          </div>

          <div className={style['scroll--menu']}>
            <div className="">
              {/* <div className="scroll--menu--title">
                <h6 className="subtitle-1 margin--bottom--xs">All Events</h6>
              </div> */}
              <Button button={buttons} filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </MaxLayout>
  );
}
