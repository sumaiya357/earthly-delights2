import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    return (
        <div>
            <h4>Order length: {products.length}</h4>

        </div>
    );
};

export default Order;