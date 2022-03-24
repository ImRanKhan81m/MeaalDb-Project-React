import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { handleAddToOrder, meal} = props;
    const {strMealThumb, strMeal, strInstructions,} =meal;
    
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0, 100)}</p>
            <div className='btn'>
            <button onClick={() => handleAddToOrder(meal)}>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Meal; 