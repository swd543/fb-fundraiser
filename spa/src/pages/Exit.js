import React, { Component } from "react";
import {exitPage} from '../TextService.json'
 
class Exit extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>{exitPage.headline}</h2>
        <p>{exitPage.description}</p>
      </React.Fragment>
    );
  }
}
 
export default Exit;
