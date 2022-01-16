import React, { Component } from 'react';
// import React from 'react';
import { useState } from 'react';

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.setChanged = this.setChanged.bind(this);
    this.state = {
      name: 'Child',
      changed: false,
    };
  }

  setChanged = () => {
    this.setState({
      changed: !this.state.changed,
    });
    console.log(this.state.changed);
  };

  render() {
    return <div>{this.props.test}</div>;
  }
}

export default Demo1;
