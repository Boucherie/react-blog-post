import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
    constructor(props) {
      super()
      this.state = {
        body: props.body
      }
    }

    changeBody(e) {
      let newBody = prompt("What should the new body be?")
      this.setState({
        body: newBody
      })
    }
  render() {

    let allComments = [
      <Comment body ={this.props.comments[0]}/>,
      <Comment body ={this.props.comments[1]}/>,
      <Comment body ={this.props.comments[2]}/>
    ]
    let authors = [
      <Author author ={this.props.allAuthors[0]}/>,
      <Author author ={this.props.allAuthors[1]}/>,
      <Author author ={this.props.allAuthors[2]}/>
    ];

    return (
      <div>
        <h1>{this.props.title}</h1>
        {authors}
        <div>
          <p>{this.state.body}</p>
        </div>
        <h3>Comments:</h3>
        {allComments}
        <button onClick={(e) => this.changeBody(e)}>edit body!</button>
      </div>

    );
  }
}

export default Post;
