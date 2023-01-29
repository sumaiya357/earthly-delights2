import React from 'react';

const InfoCard = ({singlebestSellProduct}) => {

    const {name, img, price} = singlebestSellProduct;
    return (
        <div className="card card-side bg-base-100 shadow-xl border-slate-300 m-1">
           <div className=''> <figure><img className='' src={img}/></figure></div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;