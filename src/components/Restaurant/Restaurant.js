import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import  {Order, Detail } from '../OrderList/Order';
import './Restaurant.css'

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    const handleAddToOrder = (meal) =>{
        const newOrder = [...order, meal];
        setOrder(newOrder);
    }

    const handleAddToDetails =(meal) =>{
        // console.log(meal);
        // const newDetail = [...detail, meal];
        setDetail(meal);
    }
    
    return ( 
        <div className='restaurant'>
            <div className="food-container">
               {
                   meals.map(meal => <Meal key={meal.idMeal}
                    meal={meal} handleAddToOrder = {handleAddToOrder}
                    handleAddToDetails={handleAddToDetails}
                    ></Meal>)
               } 
            </div>
            <div className="cart-container">
                <Order order={order}></Order>
                <Detail detail={detail}></Detail>
            </div>
        </div>
    );
};

export default Restaurant;