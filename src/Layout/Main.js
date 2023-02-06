import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
          <div className='sticky top-0 z-50'>
          <Navbar></Navbar>
          </div>

            <div className='relative'>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;