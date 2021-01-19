import './App.css';
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
      <>
        <span className="h1">JUST TIMER</span>
      </>
    )
  }
}

export default App;