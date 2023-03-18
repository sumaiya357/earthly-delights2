import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product,handleRemoveItem }) => {
    const {_id, name, price,img,quantity } = product
    // const product = props.product
    console.log(product)
    return (
        <div className=' p-5'>
          
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-44 '><img className='rounded-lg' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className=""><span className='font-bold'>Item Name: </span> {name}</h2>
                    <p><span className='font-bold'>Price: </span>{price} <span className='text-xl'>৳</span></p>
                    <p><span className='font-bold'>Quantity: </span>{quantity}</p>
                    <div className="card-actions justify-end ">
                        <button onClick={() => handleRemoveItem(_id)} className="btn btn-error  "><FontAwesomeIcon icon={faTrashAlt} className='text-white'></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;