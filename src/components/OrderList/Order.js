import React from 'react';
import './Order.css'

const Order = ({order}) => {
    return (
        <div className='order'>
            <h2>Order List</h2>
            <p>Selected Items: {order.length}</p>
        </div>
    );
};

const Detail =({detail})=>{
    console.log(detail);
    const {strMealThumb, strMeal,strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strInstructions} = detail;
    return(
        
        <div className='detail'>
            <h1>Food Recife</h1>
            <div className='food-details'><hr />
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            {/* <p>{strInstructions.slice(0, 250)}</p> */}
            <ul>
                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
                <li>{strIngredient6}</li>
                <li>{strIngredient7}</li>
            </ul>
            
            </div>
        </div>
    )
}

export {Order, Detail};