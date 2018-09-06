import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
  return function (dispatch) {
    console.log('fetching inside actions');

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      //.then(data=> this.setState({posts:data}));
      .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
      }))
  }
}

export function createPost(postData) {
  return function (dispatch) {
    console.log('fetching inside actions');

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: 'NEW_POST',
          payload: posts
        }));


  }
}



