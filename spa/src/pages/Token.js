import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { tokenAccessPage } from '../TextService.json';

export const FBLoginButton = (props) => {
  return (
    <div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-use-continue-as="true" style={{ margin: 'auto' }} {...props}></div>
  )
}

export const Token = () => {

  useEffect(() => {
    FB.XFBML.parse()
    window.FB.getLoginStatus(response =>{
      console.log(response)
    })
  })

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
        {/* <button className='progressbutton' onClick={
          () => { 
            fetch('authenticate').then(r => r.text()).then(r => console.log(r))
          }}>Call</button> */}
        <Link to="/nonprofit" className='link'>
          <button className='progressbutton'>Accept</button>
        </Link>
        <FBLoginButton onClick={()=>{console.log(window.FB.getLoginStatus())}}/>
      </React.Fragment>
    );
}

export default Token;
