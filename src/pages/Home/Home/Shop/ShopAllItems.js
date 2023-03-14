import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import useAdmin from '../../../../hooks/useAdmin';
import { addToDb, getStoredCart } from '../../../../utilities/fakedb';
import Bonsai from '../../../categoryPages/Bonsai/Bonsai';
import Flowers from '../../../categoryPages/Flower/Flowers';
import Fruits from '../../../categoryPages/Fruit/Fruits';
import Indoors from '../../../categoryPages/Indoor/Indoors';
import Spices from '../../../categoryPages/Spices/Spices';
import Tools from '../../../categoryPages/Tools/Tools';
import Cart from '../Cart/Cart'
import InfoCard from '../InfoCards/InfoCard';
import NewArrivalCard from '../NewArrivalCards/NewArrivalCard';
import Product from '../Product/Product';


const ShopAllItems = () => {

    const [cart, setCart] = useState([])

    // const[deletProduct, setDeletProduct] = useState(null);

    //------------------ PRODUCTS ------------ //
    const products = useLoaderData();

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

    useEffect(() => {
        // console.log('local storage first line',products)
        const storedCart = getStoredCart();
        const savedCart = [];
        console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id)
            const addedProduct = products?.find(product =>
                product._id === id)
            //product.id === id)
            console.log(addedProduct)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart);

    }, [products])


    const handleBestSellimg = (selectedProduct) => {
        // console.log('clicked');
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);

    }


     // -------------- BEST SELLING PRODUCT -------------

     const [bestSell, setBestSell] = useState([]);
     useEffect(() => {
         fetch('http://localhost:5000/bestsell')
             .then(res => res.json())
             .then(data => setBestSell(data))
     })


    //------------ // NEW ARRIVALS //----------------

    const [newarrival, setNewArrival] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newarrival')
            .then(res => res.json())
            .then(data => setNewArrival(data))

    })


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









    // ----------// FLOWERS //----------------



    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/flowers')
            .then(res => res.json())
            .then(data => setFlowers(data))

    })



    // ----------// Fruit //----------------

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/fruits')
            .then(res => res.json())
            .then(data => setFruits(data))

    })

    // ----------// INDOOR //----------------

    const [indoors, setIndoors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/indoors')
            .then(res => res.json())
            .then(data => setIndoors(data))

    })


    // ----------// BONSAI //----------------

    const [bonsai, setBonsai] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bonsai')
            .then(res => res.json())
            .then(data => setBonsai(data))

    })


    // ----------// SPICES //----------------

    const [spices, setSpices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/spices')
            .then(res => res.json())
            .then(data => setSpices(data))

    })

    // ----------// TOOLS //----------------

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))

    })



    const handleAddToCart = (selectedProduct) => {
        // console.log('clicked');
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);

    }




    return (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  p-5'>
            {/* className='grid grid-cols-2 lg:grid-cols-2  p-5' */}

            <div>
                {/* -----------//OurPRODUCT //---------------- */}
                <div >
                    <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center'>Our Product</h4>


                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5 '>
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

                {/* -----------//BEST SELLING PRODUCT //---------------- */}


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


                {/* --------// NEW ARRIVALS //----------- */}

                <div>
                    <h4 className='bg-green-700 text-primary-content lg:text-3xl md:text-xl mt-5 mb-12 p-5 mt-20'>New Arrivals of 2023</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-36 gap-y-4 mb-10 p-5'>
                        {
                            newarrival.map(newArrivalProduct => <NewArrivalCard
                                key={newArrivalProduct.id}
                                newArrivalProduct={newArrivalProduct}
                                handleAddToCart={handleAddToCart}></NewArrivalCard>)
                        }
                    </div>
                </div>



                {/*-------------// <Flower></Flower>//------------------- */}

                <div id='flower' >
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center '>Flower Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                flowers.map(flower => <Flowers

                                    key={flower.id}
                                    flower={flower}
                                    handleAddToCart={handleBestSellimg}
                                >


                                </Flowers>)
                            }

                        </div>
                    </div>
                </div>


                {/*-------------// <FRUIT> //------------------- */}

                <div id='fruit'>
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Fruit Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                fruits?.map(fruit => <Fruits
                                    key={fruit._id}
                                    fruit={fruit}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Fruits>)
                            }

                        </div>
                    </div>
                </div>


                {/*-------------// < INDOOR > //------------------- */}

                <div id='indoor'>
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Indoor Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                indoors?.map(indoor => <Indoors
                                    key={indoor._id}
                                    indoor={indoor}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Indoors>)
                            }

                        </div>
                    </div>
                </div>



                {/*-------------// <BONSAI> //------------------- */}

                <div id='bonsai'>
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Bonsai Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                bonsai?.map(bonsai => <Bonsai
                                    key={bonsai._id}
                                    bonsai={bonsai}
                                    handleAddToCart={handleAddToCart}
                                >
                                </Bonsai>)
                            }

                        </div>
                    </div>
                </div>



                {/*-------------// <SPiCES> //------------------- */}

                <div id='spices'>
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Spices Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                spices?.map(spices => <Spices
                                    key={spices._id}
                                    spices={spices}
                                    handleAddToCart={handleAddToCart}>


                                </Spices>)
                            }

                        </div>
                    </div>
                </div>


                {/*-------------// <TOOLS> //------------------- */}

                <div id='tools'>
                    <h4 className='bg-gray-200 text-green-700 lg:text-3xl md:text-xl mt-5 mb-12 p-3 flex justify-center text-green'>Tools Collection</h4>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-x-24 gap-y-4 mb-10 p-5'>
                            {
                                tools?.map(tool => <Tools
                                    key={tool._id}
                                    tool={tool}
                                    handleAddToCart={handleAddToCart}
                                >


                                </Tools>)
                            }

                        </div>
                    </div>
                </div>


            </div>
            

            <div className='cart-container pl-72 mt-5 '>
                        
            {/* <Cart  cart={cart}> </Cart> */}


            {
                        isAdmin? <>
                        <label>  </label>
                         </>:
                         <Cart  cart={cart}> </Cart>
                       }

            
            </div>
        </div>

    );
};

export default ShopAllItems;