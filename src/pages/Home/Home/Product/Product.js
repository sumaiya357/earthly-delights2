import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = ( props ) => {
    const { name, img, price } = props.product
    return (
        <div>
            <div className="card w-48 glass">
                <figure><img src= {img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p className='font-bold ' >{price} <span className='text-2xl'>৳</span></p>
                    <div className="card-actions justify-start">
                        {/* <button >Buy now!</button> */}
                        <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-success btn-sm text-xs button text-white">Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;