import React, { Component } from 'react';
import Day from './day';

let five_day = [
  {
    name: 'Wed',
    sky: 'clouds.jpg',
    high: 78,
    low: 67,
    selected: false,
    key: 1
  },
  {
    name: 'Thu',
    sky: 'clouds.jpg',
    high: 83,
    low: 66,
    selected: false,
    key: 2
  },
  {
    name: 'Fri',
    sky: 'rain.jpg',
    high: 77,
    low: 65,
    selected: false,
    key: 3
  },
  {
    name: 'Sat',
    sky: 'clouds.jpg',
    high: 78,
    low: 64,
    selected: false,
    key: 4
  },
  {
    name: 'Sun',
    sky: 'clouds.jpg',
    high: 77,
    low: 62,
    selected: false,
    key: 5
  }
];

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: five_day
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(k) {
    let current = this.state.days;
    let newDays = [];
    let d;
    for (d of current) {
      let isSelected = (d.key == k);
      let updated = {
        name: d.name,
        sky: d.sky,
        high: d.high,
        low: d.low,
        selected: isSelected,
        key: d.key
      };
      newDays = newDays.concat(updated);
    }
    this.setState({ days: newDays });
  }

  render() {
    return (
      <div>
        <Day days={this.state.days} handleClick={this.handleClick}/>
      </div>
    );
  }
};

export default Forecast;
