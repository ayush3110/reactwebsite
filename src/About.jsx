import React from 'react';
import web from './img/about.jpeg';
import Common from './Common';

const About = () =>{
    return (
        <>
        <Common 
        name='Welcom to About page' 
        imgsrc={web} 
        visit='/contact' 
        btname='Contact Now' />
        </>
    );
};

export default About;