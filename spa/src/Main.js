import React, { Component } from "react";
import {
  HashRouter, NavLink, Route
} from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import Exit from "./pages/Exit";
import Home from "./pages/Home";
import Nonprofit from "./pages/Nonprofit";
import Token from "./pages/Token";

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <ul className="header">
            <li><NavLink exact to="/" style={{pointerEvents:'none'}}>Welcome</NavLink></li>
            <li><NavLink to="/token" style={{pointerEvents:'none'}}>Token access</NavLink></li>
            <li><NavLink to="/nonprofit" style={{pointerEvents:'none'}}>Choose fundraiser</NavLink></li>
            <li><NavLink to="/contact" style={{pointerEvents:'none'}}>Contact</NavLink></li>
            <li style={{float:'right'}}><NavLink to="/exit">Exit</NavLink></li>
          </ul>
          <div className="content" style={{border:'1px dashed green'}}>
            <Route exact path="/" component={Home}/>
            <Route path="/token" component={Token}/>
            <Route path="/nonprofit" component={Nonprofit}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/exit" component={Exit}/>
            <Route path="/confirm" component={Confirmation}/>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default Main;
