import React, { Component } from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.createPost = this.createPost.bind(this);
  }

  createPost(data) {
    return (
      <div className="card" key={data.key}>
        <div className="container">
          <div className="inner">
            <img src="logo.jpg"/>
          </div>
          <div className="inner">
            <p className="name">Username</p>
            <p className="time">{data.date}</p>
          </div>
        </div>
        <div className="post">
          <img src={data.pic}/>
          <p>{data.caption}</p>
        </div>
      </div>
    );
  }

  render() {
    let items = this.props.posts;
    let postList = items.map(this.createPost);
    return(
      <div>
      {postList}
      </div>
    );
  }
};

export default Card;
