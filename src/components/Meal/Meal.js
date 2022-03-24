import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMealThumb, strMeal, strInstructions,} = props.meal;
    const { handleAddToOrder, meal} = props;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0, 100)}</p>
            <div className='btn'>
            <button>See Details</button>
            <button onClick={() => handleAddToOrder(meal)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Meal;