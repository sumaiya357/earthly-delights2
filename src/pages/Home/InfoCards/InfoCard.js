import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = ({ singlebestSellProduct }) => {

    const { name, img, price } = singlebestSellProduct;
    return (

        <div className="card w-56 bg-base-100 shadow-xl rounded">
            <figure className=""><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                   
                </h2>
                <p className='font-bold ' >{price} <span className='text-2xl'>৳</span></p>
                <div className="card-actions justify-start">
                <button className="btn btn-success btn-sm text-xs button text-white  ">Add To Cart
                <FontAwesomeIcon className='ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>


        // <div className="card card-side bg-base-100 shadow-xl border-slate-300 m-1">
        //    <div className=''> <figure><img className='' src={img}/></figure></div>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{price}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default InfoCard;