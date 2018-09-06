import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import rootReducer from './reducers'


const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;