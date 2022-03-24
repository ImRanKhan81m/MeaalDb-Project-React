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

export default Order;