import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Token from "./Token";
import Contact from "./Contact";
import Exit from "./Exit";
import Nonprofit from "./Nonprofit";

class Main extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Welcome</NavLink></li>
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
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
