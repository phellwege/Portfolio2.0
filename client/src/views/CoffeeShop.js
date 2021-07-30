import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import img1 from "../static/coffeeshop1.png";
import img2 from "../static/coffeeshop2.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logo2 from "../components/Logo2";
import BottomFooter2 from "../components/BottomFooter2";



const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img1} onDragStart={handleDragStart} />,
    <img src={img2} onDragStart={handleDragStart} />,
];

const SWHomeComing = () => {
    return (
        <div id="CoffeeShopBG">
        <Logo2/>
            <div id="full_body_wrap">
                <div id="image_wrap">
                    <h2>CoffeeShop</h2><AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
                
                <div class="text_wrap">
                    <p>
                    <h3>Non-Technical Description:</h3>
                    <p>This was a MERN project that presented a log of unique challenges. 
                        It has a multi-tiered login system, and can collect inventory information directly from the admin in order to show the currently stocked items.
                    </p>
                    <br/>
                        <h3>Technical Description:</h3>
                    This project started as a solo project and evolved into a multi-person passion project. 
                    CoffeeShop was managed using SCRUM in order to maintain efficiency. and changes were administered directly through GitHub.
                    CoffeeShop is a SPA (single page application) primarily built out in ReactJS with express for middle and MongoDB for backend. 
                    This allows it to be very user friendly, and have a clean functional appearance.  
                    We intentionally avoided the use of Bootstrap for additional CSS practice.
                    Utilized Bcrypt, and multiple validations to protect our clients data.
                <div id="line_break"></div>
                <br/>
                <h3>Check it out on my Github</h3>
                <a href="https://github.com/phellwege/CoffeeShop" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <br/>
                <div class="text_wrap">
                    <p>
                        <h3>Technology Utilized:</h3>
                        ReactJS, HTML5, CSS, JavaScript, ExpressJS, MongoDB, Axios, Github, AWS EC2, BCrypt.</p>
                </div>
                </div>
                </div>
                </div>
                
            <BottomFooter2/>
        </div>
    )
};
export default SWHomeComing;