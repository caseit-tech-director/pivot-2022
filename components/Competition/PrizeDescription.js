import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../../styles/modules/_prizes.module.scss';

export default function PrizeDescription(props) {
  const [expanded, setExpanded] = useState(false);

  function handleClick(props) {
    setExpanded(!expanded);
  }

  return (
    <div className={style['prize--desc--container']}>
      <div className={style['animate--scene--container']}>
        <div className={style['cta--container']}>
          <button
            className={style['prize--toggle--button']}
            onClick={() => handleClick()}
          >
            +
          </button>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
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
                <h5>{props.prizeTitle}</h5>
                <div className="overline">{props.prizeOverline}</div>
              </div>
              <ul className="body-2">
                <li>{props.prizeDesc1}</li>
                <li>{props.prizeDesc2}</li>
                <li>{props.prizeDesc3}</li>
                <li>{props.prizeDesc4}</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
