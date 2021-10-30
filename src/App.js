import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Calculator } from './Calculator'
import { Pokemon } from './Pokemon'
import { CalcStoreProvider } from "./storeContext";

export default function App() {

  return (
    <CalcStoreProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calc">Calc</Link>
              </li>
              <li>
                <Link to="/pokemon">Pokemon</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/calc">
              <Calc />
            </Route>
            <Route path="/pokemon">
              <Poke />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CalcStoreProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Calc() {

  return (
    <>
      <h2>Home</h2>
      <Calculator />
    </>
  )
}

function Poke() {
  return (
    <>
      <h2>Pokemon</h2>
      <Pokemon />
    </>
  )
}