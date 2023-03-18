import React from 'react';
import img from '../../Assets/Images/tp.jpg'
import img2 from '../../Assets/Images/tp2.jpg'

const Articles = () => {
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10'>
{/* border border-red-700 */}
            <div className=' just flex justify-center'>
                
                      <figure><img className='w-11/12' src={img}/></figure>
            </div>
            {/* border border-blue-700 */}
            <div  className=' flex justify-center flex items-center text-lg '>
                        <p className='pr-5'>Trees are important for us to live in. It has been shown that spending time among trees and green spaces reduces the amount of stress that we carry around with us in our daily lives.Planting trees is the ideal approach to support nature. It additionally helps other living species, including people, in many ways.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-20 pt-20'>
{/* border border-red-700 */}
            <div className=' just flex justify-center'>
                {/* //flex justify-center flex items-center border border-blue-700*/}
            <p className='  text-lg flex justify-center flex items-center   pr-5'> Earthly Delights provide all fruit plants,flower plants,bonsai,tools all over Bangladesh. We provide the best customer support all time , you can order also cash on delivery. </p>
            {/* <button>Contact Us</button></p> */}
           
              
            </div>
            {/* border border-blue-700 */}
            <div  className=' just flex justify-center'>
            <figure ><img className='w-9/12' src={img2}/></figure>
           
            </div>
        </div>
        </div>
    );
};

export default Articles;