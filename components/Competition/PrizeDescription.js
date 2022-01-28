import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../../styles/modules/_prizes.module.scss';

export default function PrizeDescription({ prizeInfo }) {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={style['prize--desc--container']}>
      <button onClick={() => handleClick()}></button>
      <AnimatePresence>
        <div
          className={style['prize--desc--wrapper']}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            ease: [0, 0.55, 0.45, 1],
            duration: 0.3,
          }}
        >
          <div className={style['prize--title--wrapper']}>
            <h5>Title</h5>
            <div className={style['overline">Overline</']} iv></div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              perspiciatis unde quibusdam numquam porro?
            </p>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
