import React from "react";
import {
  HashRouter, NavLink, Route
} from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import Exit from "./pages/Exit";
import Home from "./pages/Home";
import Nonprofit from "./pages/Nonprofit";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import Token from "./pages/Token";

export const Routes = {
  'HOME':'/',
  'TOKEN':'/token',
  'NONPROFIT':'/nonprofit',
  'CONTACT':'/contact',
  'EXIT':'/exit',
  'CONFIRM':'/confirm',
  'TERMS':'/terms',
  'PRIVACY':'/privacy'
}

export const Main = (_props) => {
  return (
    <HashRouter>
      <div className="container">
        <ul className="header">
          <li><NavLink exact to={Routes.HOME} style={{ pointerEvents: 'none' }}>Welcome</NavLink></li>
          <li><NavLink to={Routes.TOKEN} style={{ pointerEvents: 'none' }}>Token access</NavLink></li>
          <li><NavLink to={Routes.NONPROFIT} style={{ pointerEvents: 'none' }}>Choose fundraiser</NavLink></li>
          <li><NavLink to={Routes.CONTACT} style={{ pointerEvents: 'none' }}>Contact</NavLink></li>
          <li style={{ float: 'right' }}><NavLink to={Routes.EXIT}>Exit</NavLink></li>
        </ul>
        <div className="content" style={{ border: '1px dashed green' }}>
          <Route exact path={Routes.HOME} component={Home} />
          <Route path={Routes.TOKEN} component={Token} />
          <Route path={Routes.NONPROFIT} component={Nonprofit} />
          <Route path={Routes.CONTACT} component={Contact} />
          <Route path={Routes.EXIT} component={Exit} />
          <Route path={Routes.CONFIRM} component={Confirmation} />
          <Route exact path={Routes.TERMS} component={Terms} />
          <Route exact path={Routes.PRIVACY} component={PrivacyPolicy} />
        </div>
        <div style={{ backgroundColor: 'beige', bottom: 0, marginTop: 'auto', display: 'flex', padding: 32, justifyContent: 'center' }}>
          <ul className="banner">
            <li><NavLink exact to={Routes.TERMS}>Terms and conditions</NavLink></li>
            <li><NavLink exact to={Routes.PRIVACY}>Privacy Policy</NavLink></li>
          </ul>
        </div>
      </div>
    </HashRouter>
  )
}

export default Main;
