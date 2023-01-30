import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <ul className="menu menu-compact bg-base-400 rounded-box mt-3 ">
                    <h4 className='text-2xl font-bold font-serif mb-5'>Category</h4>
                    <>
                    <Link to='/flower' className='mb-4 font-bold font-serif pt-8'>Flower Plant</Link> 
                    <Link to='/indoor' className='mb-4 font-bold font-serif'>Indoor Plant</Link>
                    <Link to='/fruit' className='mb-4 font-bold font-serif'>Fruit Plant</Link> 
                    <Link to='/bonsai' className='mb-4 font-bold font-serif'>Bonsai Plant</Link>  
                    <Link to='/herbal' className='mb-4 font-bold font-serif'>Herbal Plant</Link> 
                    <Link to='/spices' className='mb-4 font-bold font-serif'>Spices Plant</Link> 
                    <Link to='/vegetables' className='mb-4 font-bold font-serif'>Vegetables</Link> 
                     
                    <Link to='/seeds' className='mb-4 font-bold font-serif'>Seeds</Link> 
                   
                    </>
                </ul>
        </div>
    );
};

export default Category;