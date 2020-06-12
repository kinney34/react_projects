import React, { Component } from 'react';

//props: name, sky, high, low
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.makeForecast = this.makeForecast.bind(this);
  }

  click(k) {
    this.props.handleClick(k);
  }

  makeForecast(day) {
    console.log(day);
    let cn = day.selected ? "dayCard selected" : "dayCard";
    return (
      <div className={cn} onClick={() => this.click(day.key)} key={day.key}>
        <h2>{day.name}</h2>
        <img src={day.sky}/>
        <p>{day.high}&deg; {day.low}&deg;</p>
      </div>
    );
  }

  render() {
    let d = this.props.days;
    console.log(d);
    let forecast = d.map(this.makeForecast);
    return (
      <div className="container">
        {forecast}
      </div>
    );
  }
};

export default Day;
