import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Token extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Token access</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
        <Link to="/nonprofit" style={{display:'flex'}}>
          <button className='progressbutton'>Accept</button>
        </Link>
      </React.Fragment>
    );
  }
}
 
export default Token;
