import React from 'react';
import Common from './Common';
import web from './img/home.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Common 
        name='Grow your bussiness with' 
        imgsrc={web} 
        visit='/service' 
        btname='Get Started' />
        </>
    );
};

export default Home;