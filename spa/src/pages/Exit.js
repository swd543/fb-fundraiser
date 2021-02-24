import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Routes } from "../Main";
import { exitPage } from '../TextService.json'

export const Exit = () => {
  const history = useHistory()

  return (
    <React.Fragment>
      <h2>{exitPage.headline}</h2>
      <p>{exitPage.description}</p>
      <button className='progressbutton' onClick={()=>{
        FB.logout()
        history.push(Routes.HOME)
        }}>Agree</button>
    </React.Fragment>
  );
}

export default Exit;
