import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)

    let total = 0;
    let quantity = 0;
    let delivery = 0;

    for(const product of cart){
        total = total + product.price 
        // * product.quantity;
        // quantity = quantity + product.quantity;
        delivery = delivery + product.charge;
        // console.log(total)
    }

    // const tax = parseFloat ((total * 0.1).toFixed(2));;

    const subTotal= (total + delivery);
    return (
         <div className='sticky top-0 pt-5 pl-5 bg-amber-200   h-screen  w-56'>

                <h5 className=' pt-10 text-2xl font-bold' >Order Summary</h5>
                <p className=' pt-5 '>Selected Items : {cart.length}</p>

                <p className=' pt-3'>Total Price : <span className='text-2xl'>৳</span> {total}</p>

                <p className=' pt-3'>Delivery Charge : <span className='text-2xl'>৳</span>  {delivery} </p>

                <h5 className=' pt-3'>SUBTOTAL : <span className='text-2xl'>৳</span> {subTotal} </h5>

              <div className='pt-20 w-48  text-xs '>
              <button className="btn btn-outline btn-secondary">Pay with Bkash</button>
              </div>
         </div>
    );
};

export default Cart;

// import React from 'react';

// const Cart = ({ cart }) => {
   
//     return (
//         <div className='sticky top-0 pt-5 pl-5 bg-amber-200 h-screen  w-56'>

//             <h5 className=' pt-10 text-2xl font-bold' >Order Summary</h5>
//             <p className=' pt-5'>Selected Items : {cart.length}</p>
//             <p>Total Price : ৳ </p>
//             <p>Delivery Charge : ৳ </p>
//             <h5>Grand Total : </h5>


//         </div>
//     );
// };

// export default Cart;