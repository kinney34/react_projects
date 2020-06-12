import React, { Component } from 'react';
import Card from './card';
import './cardstyle.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
  }

  addPost(e) {
    let d = new Date();
    let newPost = {
      date: d.getDate(),
      pic: this._pic.value,
      caption: this._caption.value,
      key: Date.now()
    };
    this.setState((prevState) => {
      return {
        posts: prevState.posts.concat(newPost)
      };
    });
    this._pic.value = "";
    this._caption.value = "";
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addPost}>
          <input type="url" ref={(a) => this._pic = a} placeholder="Enter url"/>
          <input type="text" ref={(a) => this._caption = a} placeholder="Enter caption"/>
          <button type="submit">Post</button>
        </form>
        <Card posts={this.state.posts}/>
      </div>
    );
  }
};

export default Feed;
