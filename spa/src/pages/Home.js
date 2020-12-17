import React, { Component } from "react";
import { Link } from "react-router-dom";
import { welcomePage } from '../TextService.json'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{welcomePage.headline}</h1>
        <p>{welcomePage.description}</p>
        <Link to="/token" className='link'>
          <button className='progressbutton'>Agree</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Home;
