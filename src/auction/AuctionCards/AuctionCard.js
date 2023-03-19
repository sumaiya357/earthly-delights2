
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AuctionCard = ({auc}) => {
    const { name, img, price } = auc;
    // const product = props.auc;

    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


    // console.log(product.duration)
     // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed

    // const durations = product.duration
    // console.log("time",durations)
  
    // const tax = parseFloat ((total * 0.1).toFixed(2));
    const prices = parseInt(price);
    const [num,  setNum] = useState(prices);

    const  inc = () => {
        setNum( num +1)
    }

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [sec, setSec] = useState(0);

    const [inputData, setInputData] = useState ('1 april 2023');
    const [currentDate, setCurrentDate] = useState(inputData);

    useEffect(() => {
        const changingDate = new Date(inputData);
        const currentDate = new Date();
        const totalSec = (changingDate - currentDate)/ 1000;

        setDays(formatTime(Math.floor( totalSec / 3600 / 24)));
        setHours(Math.floor( totalSec / 3600 ) % 24);
        setMins(Math.floor( totalSec / 60 / 24 )% 60);
        setSec(Math.floor( totalSec % 60));
    }, [currentDate]);


        function formatTime(time){
            return time < 10 ? `0${time}` : time;
        }
   

        const onChangeInput= (event) =>{
              setInputData(event.target.value)
        }
        const onClickHandler =() =>{
            setCurrentDate(inputData)
        }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure className='w-58'><img className=' w-full rounded' src={img} alt="Movie" /></figure>
                <div className="card-body "> 
                {/* border border-red */} 
                    <h2 className="card-title">Item: {name} </h2>

                    <div className='flex  '>
                    <p className='text-xl'>Start Price : {num}</p>
                    <div className="card-actions justify-start ">
                        <button onClick={inc} className="btn btn-primary">+</button>
                    </div>

                    </div>
                    {/* <p>{timer}</p> */}
                    
                   <div className='flex '>
                        <div className='pr-1'>
                            <p>{days}</p>
                            <span>Days</span>
                        </div>

                        <div>
                            <p>{hours}</p>
                            <span>Hours</span>
                        </div>

                        <div className='pr-1 pl-1'>
                            <p>{mins}</p>
                            <span>Mins</span>
                        </div>

                        <div>
                            <p>{sec}</p>
                            <span>Sec</span>
                        </div>                   
                   </div>
                  
                    


                    <div className="card-actions justify-start">

                    {
                      isAdmin? 
                       <>
                         <input onChange={onChangeInput} className="input input-bordered w-full max-w-xs " />
                       </>
                        :
                         <>  </>
                         }
                        <button onClick={onClickHandler} className="btn btn-primary">Bid</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;