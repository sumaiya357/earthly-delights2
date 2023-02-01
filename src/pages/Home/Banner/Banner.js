import React from 'react';
import b1 from '../../../Assets/Images/Banner/b1.jpg'
import b4 from '../../../Assets/Images/Banner/rsz_b4.jpg'
import b6 from '../../../Assets/Images/Banner/b6.jpg'
import b10 from '../../../Assets/Images/Banner/b2.jpg'
import './Banner.css'
import b12 from '../../../Assets/Images/Banner/b12.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">

                <div id="slide1" className=" carousel-item relative w-full">
                
                  <div className='carousel-img'>
                  <img  src={b4} />
                 </div>  
                   
                 
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-24   top-1/2 ">
                        <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold text-white md:text-3xl '>Happiness is turning your <br></br>
                         space into green</h1>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 right-96   top-2/3 ">
                        <p className='text-xs md:text-xl lg:text-3xl  font-bold text-white'>Get upto 30% off</p>
                    </div>
                    <div className="btn-gradient absolute flex justify-start transform -translate-y-1/2 right-1/3 mt-5   top-3/4 ">
                    <button className="btn btn-success button text-white text-xs md:text-xs lg:text-xl btn-sm lg:btn-md">Shop Now</button>
                    </div>
                    

                    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img '>
                  <img  src={b12}  />
                 </div> 
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0 ">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-24   top-1/2 ">
                        <h1 className='text-2xl lg:text-5xl md:text-3xl  font-bold  text-white'>Happiness is watching bulbs  <br></br>
                        grow into Flowers</h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-96 w-1/2   top-2/3 ">
                        <p className='text-xs md:text-xl lg:text-3xl font-bold text-white'>Get upto 30% off</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 right-1/3 mt-5   top-3/4 ">
                    <button className="btn btn-success text-white button">Shop Now</button>
                    </div>
                    
                </div>


                <div id="slide3" className="carousel-item relative w-full">
                   <div className='carousel-img'>
                   <img src= {b10} className='w-full' />
                   </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5  right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 right-32   top-1/2 ">
                        <h1 className='text-2xl lg:text-5xl md:text-3xl  font-bold text-white'>Happiness is  growing more  <br></br>
                        and more plants</h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 right-24  top-2/3">
                        <p className='text-xs md:text-xl lg:text-3xl font-bold text-white'>"GREEN GVES HEATH AND HEATH IS WEALTH"</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2  mt-5  right-1/3  top-3/4 ">
                    <button className="btn btn-success text-white button">Shop Now</button>
                    </div>
                </div>
               
               
            </div>
        </div>
    );
};

export default Banner;