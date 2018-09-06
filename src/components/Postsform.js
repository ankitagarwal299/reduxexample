import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';//connect comp to redux store 
import {createPost} from '../actions/postsActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]:e.target.value });
  }

  onSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //call action
    this.props.createPost(post);
    // fetch ('https://jsonplaceholder.typicode.com/posts',{
    //   method:'POST',
    //   headers:{
    //     'content-type':'application/json',
    //   },
    //   body:JSON.stringify(post)
    // })
    // .then(res=> res.json())
    // .then(data => console.log(data));
    
    

  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input name="title" type="text" value={this.state.title} onChange={this.onChange} />
          </div>

          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" type="text" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes={
  createPost:PropTypes.func.isRequired
}

const mapStateToProps =  state=>({
  posts:state.posts.items
})

//export default PostForm;

export default connect(mapStateToProps,{createPost})(PostForm)
