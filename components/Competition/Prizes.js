import MaxLayout from '../Layout/MaxLayout';
import style from '../../styles/modules/_prizes.module.scss';
import PrizeDescription from '../Competition/PrizeDescription';
import React, { Component } from 'react';

class Prizes extends Component {
  render() {
    let section = null,
      className = '';

    if (this.props.className !== undefined) {
      className = this.props.className;
    }

    section = (
      <div className={style['test']}>
        <div className={[style['cube'], style[this.props.class]].join(' ')}>
          <div
          className={[
              style['cube__face'],
              style[this.props.color],
              style['cube__face--front'],
            ].join(' ')}
          >
            {this.props.prizeName}
          </div>
          <div
            className={[
              style['cube__face'],
              style[this.props.color],
              style['cube__face--back'],
            ].join(' ')}
          >
            {/* back */}
          </div>
          <div
            className={[
              style['cube__face'],
              style[this.props.color],
              style['cube__face--right'],
            ].join(' ')}
          >
            {/* right */}
          </div>
          <div
            className={[
              style['cube__face'],
              style[this.props.color],
              style['cube__face--left'],
            ].join(' ')}
          >
            {/* left */}
          </div>
          <div
            className={[
              style['cube__face__short'],
              style[this.props.color],
              style['cube__face--top'],
            ].join(' ')}
          >
            {/* top */}
          </div>
          <div
            className={[
              style['cube__face__short'],
              style[this.props.color],
              style['cube__face--bottom'],
            ].join(' ')}
          >
            {/* bottom */}
          </div>
        </div>
        <div className={[style['test--wrapper'], style[this.props.test]].join(' ')}>
          {this.props.children}
          {/* <PrizeDescription /> */}
        </div>
      </div>
    );

    return section;
  }
}

export default Prizes;
