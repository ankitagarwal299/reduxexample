import {FETCH_POSTS, NEW_POST } from '../actions/types'

const initiateState ={
  items:[],
  item:{}
}

export default function (state=initiateState,action){
  switch(action.type){
    case FETCH_POSTS:
    console.log('inside reducer');
      return {
        ...state,
        items:action.payload
      };
      case NEW_POST:
      console.log('inside  NEW_POSTreducer');
        return {
          ...state,
          item:action.payload
        }
    default:
      return state;
  }
}
