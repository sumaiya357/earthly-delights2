import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';


const AuctionCards = () => {

    const [auction, setAuction] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addedAuction')
            .then(res => res.json())
            .then(data => setAuction(data))

    })
    return (
        <div>
             <div className='m-20'>
                    <h4 className=' text-lime-500 bg-slate-200 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex m-5 flex justify-center'>Auction</h4>


                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-x-28 gap-y-16   mb-10 p-5  '>
                            {
                                auction?.map(auc => <AuctionCard
                                    key={auc._id}
                                    auc={auc}
                                    // handleAddToCart={handleAddToCart}
                                >
                                </AuctionCard>)
                            }
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default AuctionCards;