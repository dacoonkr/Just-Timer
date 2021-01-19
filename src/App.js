import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Timer, Trainer, Algorithms, NotFound } from "./pages";

function App() {
  return (
    <div className="App">
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

export default App;
