import React from 'react';
import { render } from 'react-dom';
import Demo1 from './Demo1';
import MenuItems from '../MenuItems/ScheduleItems';

class DemoTest extends React.Component {
  constructor(props) {
    super(props);
    this.superheroElement = React.createRef();
    this.state = {
      name: 'Parent',
      showMe: false,
    };
    this.showDemo = this.showDemo.bind(this);
  }

  showDemo(name) {
    console.log(name);

    this.setState({ showMe: !this.state.showMe });
    this.superheroElement.current.setChanged();
  }

  render() {
    const { showMe } = true;
    return (
      <div>
        {MenuItems.DayOne.map((item, index) => {
          return (
            <div key={index}>
              <Demo1 ref={this.superheroElement} />

              <button onClick={() => this.showDemo(index)}>button</button>
              {this.state.changed == showMe ? <Demo1 test={item.time} /> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DemoTest;
