import React, { Component } from "react";
import { Link } from "react-router-dom";
import { tokenAccessPage } from '../TextService.json'

class Token extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{tokenAccessPage.headline}</h1>
        <p>{tokenAccessPage.description}</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        <Link to="/nonprofit" className='link'>
          <button className='progressbutton'>Accept</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Token;
