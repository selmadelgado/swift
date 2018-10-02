import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Routes from './routes';
// import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Routes />
        </Router>
      </Provider>
    )
  }
}

export default App;