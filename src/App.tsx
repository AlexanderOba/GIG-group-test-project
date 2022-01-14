import React, { Component } from "react";
import { Switch, Route, BrowserRouter,HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Country_details from "./Components/country_detailspg"



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <HashRouter>
            <Switch>
              <Route path="/country_details/:name" component={Country_details} />
              <Route path="/" component={Home} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
