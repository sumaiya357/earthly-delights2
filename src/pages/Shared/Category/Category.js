import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
// import flower from '../../Home/Home/Shop/ShopAllItems'

const Category = () => {
    return (
       
        <div>
            <ul className="menu menu-compact bg-base-400 rounded-box mt-3 p-3 hover:red">
                    {/* <h4 className='text-2xl font-bold font-serif mb-5'>Category</h4> */}
                    <>
                    <Link to='/#flower' className='mb-4 font-bold font-serif pt-8'>Flower Plant</Link>                    
                    <Link to='/#fruit' className='mb-4 font-bold font-serif'>Fruit Plant</Link> 
                    <Link to='/#indoor' className='mb-4 font-bold font-serif'>Indoor Plant</Link>
                    <Link to='/#bonsai' className='mb-4 font-bold font-serif'>Bonsai Plant</Link>  
                    <Link to='/#spices' className='mb-4 font-bold font-serif'>Spices Plant</Link> 
                    <Link to='/#tools' className='mb-4 font-bold font-serif'>Tools</Link> 
                      
                
                    </>
                </ul>
        </div>
       
    );
};

export default Category;