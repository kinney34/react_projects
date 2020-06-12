import React, { Component } from 'react';

class Post extends React.Component {
  render() {
    return(
      <div className="post">
        <img src="dog.jpg" alt="Post image"/>
        <p>Good doggo!</p>
      </div>
    );
  }
};

export default Post;
