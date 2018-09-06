//combine all reducers and there is a function to do it
import {combineReducers} from 'redux';
import postReducers from './postReducers'

export default combineReducers({
  posts:postReducers
})