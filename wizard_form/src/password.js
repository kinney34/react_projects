import React, { Component } from 'react';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      errorMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let pw = this.state.password;
    console.log(pw);
    let error = '';

    if (pw.length < 8) {
      error = 'Password must be at least 8 characters long.';
    } else if (pw.match(/[A-Z]/) === null || pw.match(/[a-z]/) === null || pw.match(/\d/) === null) {
      console.log('Uppercase: ' + pw.match(/[A-Z]/));
      console.log('Lowercase: ' + pw.match(/[a-z]/));
      console.log('Digit: ' + pw.match(/\d/));
      error = 'Password must contain at least one uppercase letter, lowercase letter, and digit.';
    } else {
      this.props.onSubmit(this.state.password);
    }
    this.setState({ errorMessage: error });
  }

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Password:</p>
        <input type='text' name='password' onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
        <p>{this.state.errorMessage}</p>
      </form>
    );
  }
}

export default Password;
