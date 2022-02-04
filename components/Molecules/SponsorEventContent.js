/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../../styles/modules/_sponsors.module.scss';
import Image from 'next/image';

function Menu({ menuItem }) {
  return (
    <div className={style['item']}>
      {menuItem.map((item) => {
        return (
          <div className={style['item--container']} key={item.id}>
            <div
              className={[
                style[item.color],
                style['border--color--margin'],
              ].join(' ')}
            >
              <div className="margin--bottom--sm">
                <h4 className="margin--bottom--sm">{item.title}</h4>
                <p className="caption">Tier: {item.tier}</p>
                <div className="arrow--link">
                  <a className="caption text--color--black" href={item.website}>
                    Website -&gt;
                  </a>
                </div>
              </div>
              <div className={style['content--flex--reverse']}>
                <div className="content--wrapper">
                  <div className="margin--bottom--sm">
                    <Image
                      src={item.image}
                      width="200px"
                      height="200px"
                      objectFit="contain"
                      layout="intrinsic"
                      alt={item.alt}
                    />
                  </div>
                  <p className="body-2">{item.shortDesc}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
