/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../../styles/modules/_events.module.scss';

function Menu({ menuItem }) {
  return (
    <div className={style['item']}>
      {menuItem.map((item) => {
        return (
          <div className={style['item--container']} key={item.id}>
            {/* <img src={item.image} alt="item"/> */}
            <div className={[style[item.color], style['border--color--margin']].join(' ')}>
              <h4 className="margin--bottom--sm">{item.title}</h4>
              <p className="body-2">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
