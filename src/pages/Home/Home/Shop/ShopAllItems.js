import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Cart from '../Cart/Cart'
import Product from '../Product/Product';


const ShopAllItems = () => {

    const [cart, setCart] = useState([])

    const [products, setProducts] = useState([]) ;

    useEffect( () => {
        fetch('Products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    })

    // useEffect(() =>{
    //     console.log('local stoarge first line',products);
    //     const storedCart = getStoredCart();
    //     // console.log(storedCart);
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         // console.log(id);
    //         const addedProduct = products?.find(selectedProduct => selectedProduct.id === id)
    //         if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // console.log(addedProduct)
    //             savedCart.push(addedProduct);
    //         }
           
    //     }
    //     setCart(savedCart);
    //     // console.log('local storGE finished');
    // }, [products])


    const handleAddToCart = (selectedProduct) => {
        // console.log('clicked');
        console.log(selectedProduct);

       const newCart = [...cart, selectedProduct];
       setCart(newCart)
    }
    //     let newCart = []
    //     const exist = cart.find( product => product.id === selectedProduct.id )
    //     if(!exist){
    //         selectedProduct.quantity =1;
    //         newCart = [...cart, selectedProduct]
    //     }

    //    else{
    //     const rest = cart.filter(product => product.id !== selectedProduct.id);
    //     exist.quantity = exist.quantity + 1;
    //     newCart =[...rest, exist]
    //    }
    //     setCart(newCart)
    //     addToDb(selectedProduct.id)
    // }


    return (
        <div >
              <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-5'>Our Product</h4>
             <div className='grid grid-cols-2 lg:grid-cols-2 '>
                 
             <div className='flex justify-center'>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-x-44 gap-y-4 mb-10 p-5'>
                 {
                    products.map( product => <Product
                    id = {product.id}
                    product = {product}
                    handleAddToCart={handleAddToCart}
                    >

                    </Product>)
                 }
              </div>
             </div>

              <div className='cart-container pl-56 '> 
                <Cart
                
                cart={cart}></Cart>
                
                
                 </div>
             </div>
            </div>
        
    );
};

export default ShopAllItems;