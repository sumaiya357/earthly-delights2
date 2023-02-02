// import React from 'react';

// const Cart = (props) => {
//     const { cart } = props;
//     // console.log(cart)

//     let total = 0;
//     let quantity = 0;
//     let shipping = 0;
   
//     for(const product of cart){
//         total = total + product.price * product.quantity;
//         quantity = quantity + product.quantity;
//         shipping = shipping + product.shipping;
//         // console.log(total)
//     }

//     const tax = parseFloat ((total * 0.1).toFixed(2));;
  
//     const grandTotal= (total + shipping + tax);
//     return (
//         <div className='cart'>
//             <h5 className=' '>Order Summary</h5>
//             <p>Selected Items : {quantity}</p>
//             <p>Total Price : ৳ {total}</p>
//             <p>Total Shipping : ৳ {shipping} </p>
//             <p>Tax : ৳ {tax} </p>
//             <h5>Total :  {grandTotal.toFixed(2)}</h5>
//         </div>
//     );
// };

// export default Cart;