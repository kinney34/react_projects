import React, { Component } from 'react';

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errorMessage: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e) => {
    e.preventDefault();
    let input = this.state.username;
    if (input.length === 0) {
      this.setState({ errorMessage: 'Please enter a username.' });
    } else {
      this.props.onSubmit(this.state.username);
    }
  }

  changeHandler = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <p>Username:</p>
        <input type='text' name='username' onChange={this.changeHandler}/>
        <button type='submit'>Submit</button>
        <p>{this.state.errorMessage}</p>
      </form>
    );
  }
}

export default Username;
