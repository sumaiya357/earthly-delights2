import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../pages/SearchBar/SearchBar';
import SearchRes from '../pages/SearchBar/SearchRes';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const [results, setResults] = useState([])
    return (
        <div>
          <div className='sticky top-0 z-50'>
          <Navbar></Navbar>
          <SearchBar  setResults = {setResults}></SearchBar>
          <SearchRes results={results}></SearchRes>
          </div>

            <div className='relative'>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;