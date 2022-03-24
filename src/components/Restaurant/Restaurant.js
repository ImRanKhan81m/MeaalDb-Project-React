import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../OrderList/Order';
import './Restaurant.css'

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const handleAddToOrder = (meal) =>{
        const newOrder = [...order, meal];
        setOrder(newOrder);
    }
    
    return ( 
        <div className='restaurant'>
            <div className="food-container">
               {
                   meals.map(meal => <Meal key={meal.idMeal}
                    meal={meal} handleAddToOrder = {handleAddToOrder}
                    
                    ></Meal>)
               } 
            </div>
            <div className="cart-container">
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default Restaurant;