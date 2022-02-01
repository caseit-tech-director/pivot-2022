import React from 'react';
import style from '../../styles/modules/_events.module.scss';

function Menu({menuItem}) {
    return (
        <div className={style['item']}>
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p className="body-1">{item.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;
