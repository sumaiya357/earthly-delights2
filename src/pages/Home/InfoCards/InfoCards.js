import React from 'react';
import { Link } from 'react-router-dom';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const bestSell = [
        {
            id: 1,
            name: "Bonsai",
            img: "https://cdn.shopify.com/s/files/1/2441/5983/products/AmuseableBonsaiTree_700x.jpg?v=1655818112",
            price: 3000
        },
        {
            id: 2,
            name: "Lotus",
            img: "https://i.pinimg.com/736x/f7/3c/72/f73c72d63b2b0821e8ebc72ab5ff343e.jpg",
            price: 1000
        },
        {
            id: 3,
            name: "Pink Rose",
            img: "https://www.thefragrantrosecompany.co.uk/media/catalog/product/cache/92cbed5f29d6c3826fd0716e473f2bfa/m/i/millie-garden-rose-1.jpg",
            price: 2000
        },
        {
            id: 4,
            name: "Tomato",
            img: "https://laidbackgardener.blog/wp-content/uploads/2018/02/20180214a-sweetvalentinehybridtomato-www-hpsseed-com.jpg",
            price: 700
        },
        {
            id: 5,
            name: "Aloe Vera",
            img: "https://pictures.kare-design.com/6/KARE-60724-700x700.jpg",
            price: 1500
        },
        {
            id: 6,
            name: "Strawberry",
            img: "https://www.thegardenshop.ie/images/detailed/6/alpine-strawberry-plants.jpg",
            price: 4000
        },

    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-2'>
             
            <div>
            <h4 className='bg-green-700 text-primary-content mt-5 mb-12 p-3'>OUR BEST SELLLING PRODUCTS</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
               {
                   bestSell.map(singlebestSellProduct => <InfoCard

                       key={singlebestSellProduct.id}
                       singlebestSellProduct={singlebestSellProduct}>

                   </InfoCard>)
               }
           </div >
            </div>
            <div className=' flex justify-center mt-5 mb-12 ml-20 mr-5 bg-gray-300'>
                <ul className="menu menu-compact bg-base-400 rounded-box mt-3">
                    <h4 className='text-xl font-bold mb-5'>Category</h4>
                    <>
                    <Link className='mb-4 font-bold font-serif'>Flower Plant</Link> 
                    <Link className='mb-4 font-bold font-serif'>Indoor Plant</Link>
                    <Link className='mb-4 font-bold font-serif'>Fruit Plant</Link> 
                    <Link className='mb-4 font-bold font-serif'>Bonsai Plant</Link>  
                    <Link className='mb-4 font-bold font-serif'>Herbal Plant</Link> 
                    <Link className='mb-4 font-bold font-serif'>Spices Plant</Link> 
                    <Link className='mb-4 font-bold font-serif'>Vegetables</Link> 
                    <Link className='mb-4 font-bold font-serif'>Herbal Plant</Link> 
                    <Link className='mb-4 font-bold font-serif'>Seeds</Link> 
                   
                    </>
                </ul>
            </div>
        </div>
    );
};

export default InfoCards;