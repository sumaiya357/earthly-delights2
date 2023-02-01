import React from 'react';

const NewArrivalCard = ({ newArrivalProduct }) => {
    const { name, img, price } = newArrivalProduct;

    return (
    
            
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-success">NEW</div>
                    </h2>
                <p className='font-bold ' >{price} <span className='text-2xl'>৳</span></p>
                  
                <div className="card-actions justify-start">
                <button className="btn btn-success btn-sm text-xs button text-white  ">Shop Now</button>
                </div>
                </div>
            </div>
      
    );
};

export default NewArrivalCard;