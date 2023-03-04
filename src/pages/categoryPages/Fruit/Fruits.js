import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Fruits = ( props ) => {
    const { name, img, price } = props.fruit

    return (
        <div>
            
            <div className="card w-48 glass">
                <figure><img src= {img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base ml-1"> {name} </h2>
                    <p className='font-bold ml-1' >{price} <span className='text-2xl'>৳</span></p>
                    <div className="card-actions justify-start">
                        {/* <button >Buy now!</button> */}
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn-cart btn btn-success btn-sm text-xs button text-white">Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Fruits;