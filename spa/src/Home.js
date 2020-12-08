import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to fundraiser app</h1>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        {/* <NavLink className='progressbutton' exact to="/token">Agree</NavLink> */}
        <Link to="/token" className='link'>
          <button className='progressbutton'>Agree</button>
        </Link>
      </React.Fragment>
    );
  }
}
 
export default Home;
