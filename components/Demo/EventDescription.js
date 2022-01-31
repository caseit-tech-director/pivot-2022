import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from '../../styles/modules/_schedule.module.scss';

export default function EventDescription({ eventInfo }) {
  const [expanded, setExpanded] = useState(false);
  const [toggled, setToggled] = useState(false);
  const { title, time, desc, fulldesc } = eventInfo;

  function handleClick() {
    setExpanded(!expanded);
  }

  function removeToggle() {
    setToggled(!toggled);
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
          <AnimatePresence>
            <motion.div
              className={style['toggle--motion--container']}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                ease: [0, 0.55, 0.45, 1],
                duration: 0.3,
              }}
            >
              <span
                id="toggle"
                className={[
                  style['toggle--button'],
                  style[''],
                ].join(' ')}
              >
                {!expanded && (
                  <div
                    className={[style['expand--icon'], style['expanded']].join(
                      ' '
                    )}
                  ></div>
                )}
                {expanded && <div className={style['expand--icon']}></div>}
              </span>
            </motion.div>
          </AnimatePresence>
          <p>{desc}</p>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              className={style['toggle--motion--container']}
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
