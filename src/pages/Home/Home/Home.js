import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import NewArrivalCards from '../NewArrivalCards/NewArrivalCards';
import ShopAllItems from './OurProducts/ShopAllItems';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <InfoCards></InfoCards>
            <NewArrivalCards></NewArrivalCards>
            <ShopAllItems></ShopAllItems>
        </div>
    );
};

export default Home;