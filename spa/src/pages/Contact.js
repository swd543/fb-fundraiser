import React, { Component } from "react";
import { contactPage } from '../TextService.json'

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>{contactPage.headline}</h1>
        <p>{contactPage.description}</p>
      </div>
    );
  }
}

export default Contact;
