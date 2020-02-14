import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { envName: '' }
  componentDidMount() {
    const envName = process.env.envName;
    this.setState({ envName });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Vandana</h2>
        </div>
        <p className="App-intro">
          Welcome this is your website live
        </p>
        <p>{this.state.envName}</p>
      </div>
    );
  }
}

export default App;
