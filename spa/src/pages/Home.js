import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../Main";
import { welcomePage } from '../TextService.json';

export const Home = () => {
  const history = useHistory()
  
  useEffect(()=>{
    FB.getLoginStatus(response => response && response.status == 'connected' && history.push(Routes.NONPROFIT))
  })

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


export default Home;
