import React, { Component } from 'react';
import Email from './email';
import Username from './username';
import Password from './password';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Email onSubmit={this.handleEmail}/>,
      email: '',
      username: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleEmail = (input) => {
    console.log(this.state);
    this.setState({
      currentPage: <Username onSubmit={this.handleUsername}/>,
      email: input
    });
  }

  handleUsername = (input) => {
    this.setState({
      currentPage: <Password onSubmit={this.handlePassword}/>,
      username: input
    });
  }

  handlePassword = (input) => {
    this.setState({
      currentPage: <h1>Finished</h1>,
      password: input
    })
  }

  render() {
    return (
        <div className='container'>
        {this.state.currentPage}
        </div>
    );
  }
}

export default Parent;
