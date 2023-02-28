import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Cart from '../Cart/Cart'
import InfoCard from '../InfoCards/InfoCard';
import NewArrivalCard from '../NewArrivalCards/NewArrivalCard';
import Product from '../Product/Product';


const ShopAllItems = () => {

    const [cart, setCart] = useState([])

       // -------------- BEST SELLING PRODUCT -------------
       const [bestSell, setBestSell] = useState([]);
       useEffect(() => {
           fetch('BestSell.json')
               .then(res => res.json())
               .then(data => setBestSell(data))
       })


    //    useEffect( () => {
    //     // console.log('local storage first line',products)
    //     const storedCart = getStoredCart();
    //     const savedCart =[];
    //     console.log(storedCart);
    //     for(const id in storedCart){
    //         // console.log(id)
    //          const addedProduct = bestSell?.find(product => 
    //             product.id === id)
    //             //product.id === id)
    //          console.log(addedProduct)
    //          if(addedProduct){
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //              savedCart.push(addedProduct)
    //          }
    //     }
    //      setCart(savedCart);
             
    // }, [bestSell])


       const handleBestSellimg = (selectedProduct) => {
        // console.log('clicked');
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if(!exists){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
      
        setCart(newCart);
        addToDb(selectedProduct._id);

    }


    //------------ NEW ARRIVALS-----------

    // const [newarrival, setNewArrival] = useState([]);

    // useEffect(() => {
    //     fetch('NewArrivals.json')
    //         .then(res => res.json())
    //         .then(data => setNewArrival(data))

    // })


    // useEffect(() =>{
    //     console.log('local stoarge first line',products);
        // const storedCart = getStoredCart()
        // console.log(storedCart);
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
    // },  [products])

    
    //--------- OUR PRODUCT -------------//
   const products = useLoaderData();

    useEffect( () => {
        // console.log('local storage first line',products)
        const storedCart = getStoredCart();
        const savedCart =[];
        console.log(storedCart);
        for(const id in storedCart){
            // console.log(id)
             const addedProduct = products?.find(product => 
                product._id === id)
                //product.id === id)
             console.log(addedProduct)
             if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                 savedCart.push(addedProduct)
             }
        }
         setCart(savedCart);
             
    }, [products])
     


    const handleAddToCart = (selectedProduct) => {
        // console.log('clicked');
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if(!exists){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
      
        setCart(newCart);
        addToDb(selectedProduct._id);

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
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  p-5'>
            {/* className='grid grid-cols-2 lg:grid-cols-2  p-5' */}

            <div>
                <div >
                    <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-3'>Our Product</h4>


                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                products?.map(product => <Product
                                    key={product._id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Product>)
                            }
                        </div>
                    </div>

                </div>

                {/* BEST SELLING PRODUCT */}

               
                <div >
                    <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-3'>OUR BEST SELLLING PRODUCTS</h4>


                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 '>

                            {
                                bestSell.map(singlebestSellProduct => <InfoCard

                                    key={singlebestSellProduct.id}
                                    singlebestSellProduct={singlebestSellProduct}
                                    handleAddToCart={handleBestSellimg}>

                                </InfoCard>)
                            } 
                        </div >
                    </div>
                </div>


                {/* NEW ARRIVALS */}

                <div>
                    <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-5 mt-20'>New Arrivals of 2023</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-36 gap-y-4 mb-10 p-5'>
                        {/* {
                            newarrival.map(newArrivalProduct => <NewArrivalCard
                                key={newArrivalProduct.id}
                                newArrivalProduct={newArrivalProduct}
                                handleAddToCart={handleAddToCart}></NewArrivalCard>)
                        } */}
                    </div>
                </div>
            </div>



            <div className='cart-container pl-72 mt-5 '>
                <Cart

                    cart={cart}></Cart>


            </div>
        </div>

    );
};

export default ShopAllItems;