import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import img1 from "../static/coffeeshop1.png";
import img2 from "../static/coffeeshop2.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logo2 from "../components/Logo2";
import BottomFooter from "../components/BottomFooter";



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
                    <p>This was a really fun Python project that three engineers completed in a little under four days.
                        We didn't want to utilize any API's, because we wanted to build everything form scratch. 
                        The overall concept is a text based star wars game, which gave us some interesting requirements.
                        We needed a login and registration, as well as character selection and individual statistics.
                        We then needed to create a massive database of planets, and their specific information to allow travel to unique worlds.
                    </p>
                    <br/>
                        <h3>Technical Description:</h3>
                    Collaborated on a team of three and coordinated  planning, creating wireframes, and group discussions in order to increase overall productivity on the project.
    Designed a responsive, clean front-end interface using a combination of CSS, SQLite and JQuery to create a more seamless and comprehensive environment.
    Implemented a robust SQLite database using Django in order to improve future maintenance, and elevate user experience.
    Utilized Bcrypt, and multiple validations to protect our data.
    Tested the code using W3 Code Validator to ensure it functioned at its maximum potential. 
                <br/>
                <h3>Check it out on Github</h3>
                <a href="https://github.com/phellwege/CoffeeShop" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <br/>
                <div class="text_wrap">
                    <p>
                        <h3>Technology Utilized:</h3>
                        Python, HTML5, CSS, JavaScript, SQLite, Django, JQuery, AJAX, Github, ZSH, AWS EC2, BCrypt.</p>
                </div>
                </div>
                </div>
                </div>
                
            <BottomFooter/>
        </div>
    )
};
export default SWHomeComing;