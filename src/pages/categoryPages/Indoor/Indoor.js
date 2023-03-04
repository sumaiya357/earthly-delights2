import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Indoors from './Indoors';

const Indoor = () => {
    const indoor = useLoaderData()

    return (

        <div >
                <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Indoor Collection</h4>
                    <div className='flex justify-center'>
                        <div className ='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                           {
                                indoor?.map(product => <Indoors
                                    key={product._id}
                                    product={product}
                                    // handleAddToCart={handleAddToCart}
                                >
                                </Indoors>)
                            }
            
                        </div>
                   </div>
        </div>
    );
};

export default Indoor;