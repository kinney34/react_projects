import React, { Component } from 'react';

const buttonVals = [
  { text: 'Clear',
    class: 'clear'},
  { text: '/',
    class: 'operator'},
  { text: '7',
    class: 'num'},
  { text: '8',
    class: 'num'},
  {text: '9',
   class: 'num'},
  {text: '-',
   class: 'operator'},
  { text: '4',
    class: 'num'},
  { text: '5',
    class: 'num'},
  { text: '6',
    class: 'num'},
  { text: '+',
    class: 'operator'},
  { text: '1',
    class: 'num'},
  { text: '2',
    class: 'num'},
  { text: '3',
    class: 'num'},
  { text: '=',
    class: 'operator'}
];

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
    this.makeButtons = this.makeButtons.bind(this);
  }

  makeButtons(item) {
    return <button className={item.class} key={item.text}
    onClick={() => this.click(item)}>{item.text}</button>
  }

  click(item) {
    this.props.click(item);
  }

  render() {
    let buttons = buttonVals.map(this.makeButtons);
    return (
      <div className='grid'>
        <div id='displayNum'>{this.props.displayNum}</div>
        {buttons}
      </div>
    );
  }
};

export default Display;
