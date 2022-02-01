/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../../styles/modules/_events.module.scss';
import Image from 'next/image';

function Menu({ menuItem }) {
  return (
    <div className={style['item']}>
      {menuItem.map((item) => {
        return (
          <div className={style['item--container']} key={item.id}>
            <Image src={item.image} alt="item"/>
            <div className={[style[item.color], style['border--color--margin']].join(' ')}>
              <h4>{item.title}</h4>
              <a className="caption" href={item.website}>{item.website}</a>
              <p className="body-2">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
