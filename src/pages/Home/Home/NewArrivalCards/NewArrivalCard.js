import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NewArrivalCard = (props) => {
    const { name, img, price } = props.newArrivalProduct;

    return (
    
            
            <div className="card w-60 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-red-600 border-0">NEW</div>
                    </h2>
                <p className='font-bold ' >{price} <span className='text-2xl'>৳</span></p>
                  
                <div className="card-actions justify-start">
                <button onClick={() => props.handleAddToCart(props.newArrivalProduct)} className="btn btn-success btn-sm text-xs button text-white  ">Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
                </div>
            </div>
      
    );
};

export default NewArrivalCard;