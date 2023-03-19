import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import ReviewItem from './ReviewItem/ReviewItem';

const Order = () => {
    const {products, initialCart} = useLoaderData();

    const[cart, setCart] = useState(initialCart)


    const handleRemoveItem =  (id) => {
        // console.log(id)

        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining)

        //remove from DB
        removeFromDb(id)

    }
    return (
        // border border-red-700 border-4
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 '>
            
            <div className=''>
            <h2 className='ml-5 mt-10 text-2xl'>Review Order</h2>
                {
                    cart.map(product => <ReviewItem
                    key= {product._id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}>

                    </ReviewItem>)
                }
                 
            </div>

            <div className='cart-container pl-72 mt-5 '>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;