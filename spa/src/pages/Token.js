import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../Main";
import { tokenAccessPage } from '../TextService.json';
const { REACT_APP_FACEBOOK_APP_ID, REACT_APP_FACEBOOK_SDK_VER } = process.env

export const FBLoginButton = (props) => {
  return (
    <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-use-continue-as="true" style={{ margin: 'auto' }} {...props}></div>
  )
}

export const Token = () => {
  const history = useHistory()

  // Detect login and automatically move to nonprofit page
  useEffect(()=>{
    FB.Event.subscribe('auth.statusChange', response => response && response.status == 'connected' && history.push(Routes.NONPROFIT))
  })
  
  // For rendering the facebook login button
  useEffect(() => {
    FB.XFBML.parse()
  }, [])


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
      <FBLoginButton/>
    </React.Fragment>
  );
}

export default Token;
