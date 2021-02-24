import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { nonprofitSelectPage } from '../TextService.json'

export const BaseRandom = ({ title, showRating = true, ratingDescription, showDescription = true, items = [] }) => {
  
  return (
    <React.Fragment>
      <h1>{nonprofitSelectPage.headline}</h1>
      {
        showDescription && (
          <p>
            {nonprofitSelectPage.description}
          </p>
        )
      }
      {items && <form style={{ margin: 16 }}>
        {
          items.map((s, i) => (
            <div key={i}>
              {showRating && <StarRating fillPercent={Math.random() * 75 + 25} label={ratingDescription} />}
              <input type='radio' name='charity' id={i} />
              <label htmlFor={i}>
                {s}
              </label>
            </div>
          ))
        }
      </form>}
      <Link to="/confirm" className='link' title={nonprofitSelectPage.hoverConfirmation}>
        <button className='progressbutton'>Create fundraiser</button>
      </Link>
    </React.Fragment>
  )
}
BaseRandom.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}