/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from '../../styles/modules/_events.module.scss';
import Image from 'next/image';

function Menu({ menuItem }) {
  var test = null;

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
              <h4 className="margin--bottom--sm">{item.title}</h4>

              <div className={style[item.flex]}>
                <p className="body-2">{item.description}</p>
                <div className={item.class}>
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    objectFit="contain"
                    layout="intrinsic"
                    alt={item.alt}
                  />
                  <div className="margin--top--xs">{item.title1}</div>
                </div>
                <div className={item.class + ' ' + 'flex--column'}>
                  <Image
                    src={item.image2}
                    width={item.width}
                    height={item.height}
                    objectFit="contain"
                    layout="intrinsic"
                    alt={item.alt}
                  />
                  <div className="margin--top--xs">{item.title2}</div>
                </div>
                <div className={item.class}>
                  <Image
                    src={item.image3}
                    width={item.width}
                    height={item.height}
                    objectFit="contain"
                    layout="intrinsic"
                    alt={item.alt}
                  />
                  <div className="margin--top--xs">{item.title3}</div>
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
