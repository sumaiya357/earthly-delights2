import React, {  useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthProvider';
import AddAuc from './AddAuc';

// import { Alert, ProgressBar } from 'react-bootstrap';


// import { AuthContext } from '../Context/AuthProvider';
// import firebaseConfig from '../firebase/firebase.config';
// import { AddAuction } from './AddAuction';
// import AuctionCard from './addAuctionCard';


 const AuctionBody = () => {
//   const [auction, setAuction] = useState(null);
//   const { currentUser, globalMsg } = useContext(AuthContext);
//   const { docs } = firebaseConfig('auctions');

const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostKey =process.env.REACT_APP_imgbb_key;
    // console.log(imgHostKey);

    const handleAddProduct = data => {
        // console.log(data)
        const image = data.image[0];
        // console.log(data.image[0])

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            // console.log(imgData)

            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name,
                    type:data.type,
                    img: imgData.data.url,
                    price: data.price,
                    duration:data.duration
                    // quantity: 0,
                    // charge: data.charge
                    

                }
                console.log(product)
                //SAVE Product info to DB
                fetch('http://localhost:5000/addedAuction', {
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result=> {
                    toast('Product added for auction')
                    console.log(result);
                })
                
            }
        })

      
    }

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
  
    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:10');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  
    return (
        <div className='w-96 p-7 ml-64 '>
            <h2 className='font-bold text-xl pb-5'>Add Auction</h2>
            <form  onSubmit={handleSubmit(handleAddProduct)}>


                <div className="form-control text-center  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input type="text"{...register("name", { required: "UserName required" })}
                        className="input input-bordered w-full max-w-xs " />

                    {/* ERROR MESSAGE DISPALYED */}
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}

                </div>

              

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input type="file"{...register("image", { required: "Photo required" })}
                        className="input input-bordered pt-2  w-full max-w-xs " />

                    {/* ERROR MESSAGE DISPALYED */}
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}

                </div>

               {/* -----------PRICE //---------------------- */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Start Price</span>
                    </label>

                    <input type="number"{...register("price", { required: "Price required" })}
                        className="input input-bordered w-full max-w-xs " />

                    {/* ERROR MESSAGE DISPALYED */}
                    {errors.price && <p className='text-red-500'>{errors.price?.message}</p>}

                </div>

                   {/* DURATION */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Duration</span>
                    </label>
                    
                    <input  type='text'{...register("duration", )
                   }

                       className="input input-bordered w-full max-w-xs " /> 

        

                </div>

                 

                

                <input className='btn btn-success text-white w-full bg-green-600 mt-5  max-w-xs mb-5' value='Add ' type="submit" />

                {/* display signup error */}

                {/* {signupErr && <p className='text-red-500 mt-5'>{signupErr}</p>} */}

            </form>
        </div>
    );
};


        {/* <AddAuc></AddAuc> */}
      
      {/* <div className="container">
        {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

        {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

        {currentUser && <AddAuction setAuction={setAuction} />}

        {docs && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {docs.map((doc) => {
              return <AuctionCard item={doc} key={doc.id} />;
            })}
          </div>
        )}
      </div> */}
  
export default AuctionBody