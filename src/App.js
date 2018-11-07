import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleClick = () => {
      this.setState({ working: !this.state.working });
    };
  render() {
    const light = this.state.working ? 'PAUSE' : 'WORKING';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working?"App-logo":"App-logo2"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <div className="App">
        <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
        </header>
        <Quotes/>
        
      </div>
    );
  }
}

export default App;
