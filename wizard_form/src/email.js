import React, { Component } from 'react';

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: ''
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  //check for valid email
  //if valid, send to Parent
  submitHandler(e) {
    e.preventDefault();
    let input = this.state.email.split('@');
    if (input.length !== 2) {
      this.setState({ errorMessage: 'Invalid email' });
    } else {
      let first = input[0];
      let end = input[1].split('.');
      if (end.length !== 2) {
        this.setState({ errorMessage: 'Invalid email' });
      } else {
        if (first.length === 0 || end[0].length === 0 || end[1].length !== 3) {
          this.setState({ errorMessage: 'Invalid email' });
        } else {
          this.setState({ errorMessage: '' });
          this.props.onSubmit(input);
        }
      }
    }
  }

  changeHandler(e) {
    this.setState({
      email: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.submitHandler}>
          <p>Email:</p>
          <input type='text' name='email' onChange={this.changeHandler}/>
          <button type='submit'>Submit</button>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default Email;
