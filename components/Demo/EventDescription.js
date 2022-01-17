import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../../styles/modules/_schedule.module.scss';

export default function EventDescription({ eventInfo }) {
  const [expanded, setExpanded] = useState(false);
  const { title, time, desc, fulldesc } = eventInfo;

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div
      className={[
        style['flex--container'],
        style['justify--between'],
        style['item--wrapper'],
        style['margin--bottom--sm'],
        style['event--toggler'],
      ].join(' ')}
      onClick={() => handleClick()}
    >
      <div className={style['event--wrapper']}>
        <h5 className={style['event--title']}>{title}</h5>
        <div className={style['event--description']}>
          {/* <button
            className={style['toggle--button']}
            onClick={() => setExpanded(!expanded)}
          > */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                ease: [0, 0.55, 0.45, 1],
                duration: 0.3,
              }}
            >
              <div className={style['toggle--button']}>
                {!expanded && (
                  <div
                    className={[style['expand--icon'], style['expanded']].join(
                      ' '
                    )}
                  ></div>
                )}
                {expanded && <div className={style['expand--icon']}></div>}
              </div>
            </motion.div>
          </AnimatePresence>
          <p>{desc}</p>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                ease: [0, 0.55, 0.45, 1],
                duration: 0.3,
              }}
            >
              {fulldesc}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="">
        <h6 className="event--time">{time}</h6>
      </div>
    </div>
  );
}