import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);


    return (
        <div className='restaurant'>
            <div className="food-container">
               {
                   meals.map(meal => <Meal key={meal.idMeal}
                    meal={meal}></Meal>)
               }
            </div>
            <div className="cart-container">
                <h1>my name is Imran Hossen</h1>
            </div>
        </div>
    );
};

export default Restaurant;