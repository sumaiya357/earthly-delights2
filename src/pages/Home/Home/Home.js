import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import NewArrivalCards from '../NewArrivalCards/NewArrivalCards';


const Home = () => {
    return (
        <div>
            <h3>This is home</h3>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <NewArrivalCards></NewArrivalCards>
        </div>
    );
};

export default Home;