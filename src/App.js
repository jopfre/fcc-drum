import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Drums from './components/Drums';

import store from './store';

class App extends Component {
  componentDidMount() {
    const fcc = document.createElement("script");
    fcc.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.body.appendChild(fcc);
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="App-title">Drum Machine</h1>
          <Drums />
        </div>
      </Provider>
    );
  }
}

export default App;
