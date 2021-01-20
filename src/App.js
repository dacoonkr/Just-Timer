import './App.css';
import './themes/dark.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Timer, Trainer, Algorithms, NotFound } from "./pages";
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar></Bar>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={Timer}/>
              <Route path="/trainer" exact={true} component={Trainer}/>
              <Route path="/algorithms" exact={true} component={Algorithms}/>
              <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

class Bar extends Component {
  render() {
    return (
      <div className="Bar">
        <Icon></Icon>
        <div className="Title">
          JUST TIMER
          <ScrambleType></ScrambleType>
        </div>
      </div>
    )
  }
}

class ScrambleType extends Component {
  render() {
    return (
      <div className="ScrambleType">
        3x3x3
      </div>
    )
  }
}

class Icon extends Component {
  render() {
    return (
      <svg className="Icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
      </svg>
    )
  }
}

export default App;