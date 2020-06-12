import React, { Component } from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className="container">
        <div className="inner">
        <img src="logo.jpg" alt="icon"/>
        </div>
        <div className="inner">
          <p className="name">Name</p>
          <p className="time">{this.props.time}</p>
        </div>
        <div className="post">
          <img src="dog.jpg" alt="Post image"/>
          <p>Good doggo!</p>
        </div>
      </div>
    );
  }
};

export default Header;
