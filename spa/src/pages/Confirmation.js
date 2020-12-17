import React, { Component } from "react";
import text from '../TextService.json'
 
class Confirmation extends Component {
  render() {
    return (
      <div>
        <h1>{text.confirmationEndPage.headline}</h1>
        <p>{text.confirmationEndPage.description}</p>
        <p>It is safe to close this tab.</p>
      </div>
    );
  }
}
 
export default Confirmation;
