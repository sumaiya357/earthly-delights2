import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const [bestSell, setBestSell] = useState([]) ;
    useEffect( () => {
        fetch('BestSell.json')
        .then(res => res.json())
        .then(data=> setBestSell(data))
    })

    
    return (
        <div>
             
           <div  className='grid grid-cols-2 lg:grid-cols-2  p-5'>
           <div className=''> {/* gap-x-8 gap-y-4 */} 
            {/* <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-3'>OUR BEST SELLLING PRODUCTS</h4> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 '>
               
               {
                   bestSell.map(singlebestSellProduct => <InfoCard

                       key={singlebestSellProduct.id}
                       singlebestSellProduct={singlebestSellProduct}>

                   </InfoCard>)
               }
           </div >
            </div>
           </div>
            
            {/* border-black border-8  */}
            {/* <div className=' grid h-screen place-items-center'>
               <h4 className='text-2xl font-bold font-serif mb-5 mt-10 ml-5'>All Category</h4>
            <div className='  flex justify-center w-60 mt-5 mb-12 ml-20 mr-5 bg-gray-300 h-[42rem] lg:h-[32rem] p-2   '>
            {/* h-[32rem] 
    
               <Category></Category>
       
            </div>
            </div>  */}
        </div>
    );
};

export default InfoCards;