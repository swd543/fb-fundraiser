import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';

export const BaseRandom = ({ title, showRating=true, ratingDescription, showDescription = true, items = [] }) => {
  return (
    <React.Fragment>
      <h1>Choose your nonprofit</h1>
      {
        showDescription && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sfged do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        )
      }
      {items && <form style={{ margin: 16 }}>
        {
          items.map((s,i) => (
            <div key={i}>
              {showRating && <StarRating fillPercent={Math.random()*75 + 25} label={ratingDescription}/>}
              <input type='radio' name='charity' id={i}/>
              <label htmlFor={i}>
                {s}
              </label>
            </div>
          ))
        }
      </form>}
      <Link to="/confirm" className='link'>
        <button className='progressbutton'>Create fundraiser</button>
      </Link>
    </React.Fragment>
  )
}
BaseRandom.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}