import MaxLayout from '../../components/Layout/MaxLayout';
import style from '../../styles/modules/_events.module.scss';

import SponsorEventContent from '../Molecules/SponsorEventContent';
import Button from '../Molecules/SideMenu';
import items from '../JSON/SponsorMessages';
import { useState } from 'react';

const allCategories = [
  'All Events',
  ...new Set(items.map((item) => item.category)),
];

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
        className={[style['virutal--events--container'], style['']].join(' ')}
      >
        <div className="margin--bottom--lrg">
          <h2>PIVOT SPONSORS</h2>
          <p className="overline">PIVOT | 2022</p>
        </div>

        <div className={style['event--wrapper']}>
          <div className={style['content--container']}>
            <SponsorEventContent menuItem={menuItem} />
          </div>

          <div className={style['scroll--menu']}>
            <div className="">
              <Button button={buttons} filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </MaxLayout>
  );
}
