import React, { } from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ title, calories, image, ingredients }) => {
c

  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt={title}/>
    </div>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired
};

export default Recipe;
