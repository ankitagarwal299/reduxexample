import React, { Component } from 'react';
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postsform from './components/Postsform';
import {createStore, applyMiddleware} from 'redux';

import store from './store';

//const store= createStore(()=>[],{},applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <Postsform /> <hr />

          <Posts />


        </div>
      </Provider>
    );
  }
}

export default App;
