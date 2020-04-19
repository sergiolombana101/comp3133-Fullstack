import React from 'react';
import logo from './logo.svg';
import { BrowserRoute, Route, Switch, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRoute>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newRoute">New Route</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/newRoute" component={NewRoute}/>
        </Switch>
      </div>
    </BrowserRoute>
  );
}

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

export default App;
