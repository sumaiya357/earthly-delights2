import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import NewArrivalCards from './NewArrivalCards/NewArrivalCards';

import ShopAllItems from './Shop/ShopAllItems';



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
           
            <ShopAllItems></ShopAllItems>
        </div>
    );
};

export default Home;