import React, { Component } from 'react';
import Display from './display';
import './displaystyle.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevNum: null,
      currentNum: "",
      operator: null,
      prevKey: null,
      displayNum: '0'
    }
    this.handleClick = this.handleClick.bind(this);
    this.solve = this.solve.bind(this);
  }

//item: button object { text, class }
  //text: value of button (string)
  //class: num or operator
  handleClick(item) {
    let buttonVal = item.text;
    let buttonClass = item.class;
    let currentDisplay = this.state.displayNum;
    let pk = this.state.prevKey;
    let cn = this.state.currentNum;
    if (buttonVal === 'Clear') {
      this.setState({ prevNum: null, currentNum: '', operator: null, prevKey: null, displayNum: '0' });
    }
    if (buttonVal === '=') {
      let result = this.solve();
      this.setState({ prevNum: null, currentNum: '', operator: null, prevKey: null, displayNum: result });
    } else if (buttonClass === 'num') { //button pressed is a number
        if (pk === 'num') { //last button pressed was also a number
            let newDisplay = cn + buttonVal;
            this.setState({ currentNum: newDisplay, displayNum: newDisplay });
        } else if (pk === 'op' || pk === null) { //last button was an operator OR current button is first in equation
          this.setState({ currentNum: buttonVal, prevKey: 'num', displayNum: buttonVal });
        }
    } else if (buttonClass === 'operator') {
      if (pk === 'op') {
        //error: two operators entered in a row
      } else if (pk === 'num') {
        this.setState({ prevNum: cn, currentNum: '', prevKey: 'op', operator: buttonVal, displayNum: buttonVal });
      }
    }
    console.log(this.state);
  }

  solve() {
    let firstNum = Number(this.state.prevNum);
    let secondNum = Number(this.state.currentNum);
    let op = this.state.operator;
    let result;
    switch(op) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '*':
        result = firstNum * secondNum;
        break;
      case '/':
        result = firstNum / secondNum;
        break;
      default:
        break;
    }
    return result;
  }

  render() {
    return (
      <Display click={this.handleClick} displayNum={this.state.displayNum}/>
    );
  }
};

export default Calculator;
