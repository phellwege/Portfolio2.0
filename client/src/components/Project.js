import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import "../Project.css"
import img1 from "../static/SW1.png";
import img2 from "../static/SW2.png";
import img4 from "../static/SW4.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img6 from "../static/EP1.png";
import img7 from "../static/EP2.png";
import img10 from "../static/coffeeshop1.png";
import img11 from "../static/coffeeshop2.png";
import py from '../static/python.png';
import django from '../static/django.png';
import sqlite from '../static/sqlite.png';
import ajax from '../static/ajax.png';
import css from '../static/CSS.png';
import html from '../static/HTML.png';
import js from '../static/JavaScript.png';
import express from '../static/expressjs.png';
import nodejs from '../static/nodejs.png';
import mongo from '../static/mongodb.png';
import java from '../static/java.png';
import mysql from '../static/mysql.png';
import jquery from '../static/jQuery.png';


const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img2} onDragStart={handleDragStart} />,
    <img src={img1} onDragStart={handleDragStart} />,
    <img src={img4} onDragStart={handleDragStart} />,

];
const items2 = [
    <img src={img6} onDragStart={handleDragStart} />,
    <img src={img7} onDragStart={handleDragStart} />,
];
const items3 = [
    <img src={img10} onDragStart={handleDragStart} />,
    <img src={img11} onDragStart={handleDragStart} />,
]
const Project = () => {
    return (
        <>
            <div id="full_body_wrap">
                <div id="image_wrap">
                    <h2>
                        Star Wars Homecoming
                    </h2>
                    <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true} />
                    <div class="text_wrap">
                        <p>
                            <h3>Description:</h3>
                                Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.
                            <div id="line_break"></div>
                            <br />
                            <h3>
                                Technology:
                            </h3>
                                <div class="little_icons">
                                    <img src={py}/>
                                    <img src={django}/>
                                    <img src={sqlite}/>
                                    <img src={ajax}/>
                                    <img src={css}/>
                                    <img src={html}/>
                                </div>
                            <div id="line_break">
                                <br />
                            </div>
                            <Link to="/SW"><h3>View Details</h3></Link>
                        </p>
                    </div>
                </div>
                <div id="image_wrap">
                    <h2>
                        CoffeeShop
                    </h2>
                    <AliceCarousel mouseTracking items={items3} autoPlay={true} autoPlayInterval={3000} infinite={true} />
                    <div class="text_wrap">
                        <p>
                            <h3>Description:</h3>
                            {/* no more than three sentences */}
                            CoffeeShop is an E-commerce application designed to make it easier for small business owners to operate their business. It has a multi-tiered login system allowing delegation with, while mitigating business risk.
                            <div id="line_break"></div>
                            <br />
                            <h3>
                                Technology:
                            </h3>
                            <div class="little_icons">
                                    <img src={js}/>
                                    <img src={express}/>
                                    <img src={nodejs}/>
                                    <img src={mongo}/>
                                    <img src={css}/>
                                </div>
                            <div id="line_break">
                                <br />
                            </div>
                            <Link to="/CoffeeShop"><h3>View Details</h3></Link>
                        </p>
                    </div>
                </div>
            </div>
            <div id="full_body_wrap">
                <div id="image_wrap">
                    <h2>
                        Event Planner
                    </h2>
                    <AliceCarousel mouseTracking items={items2} autoPlay={true} autoPlayInterval={3000} infinite={true} />
                    <div class="text_wrap">
                        <p>
                            <h3>Description:</h3>
                            Event Planner is a basic event planning application. 
                            It allows the user so sign in and create or join events and can determine the location and input it on google maps.
                            It also determines how many guests are currently in attendance.
                            <div id="line_break"></div>
                            <br />
                            <h3>
                                Technology:
                            </h3>
                            <div class="little_icons">
                                    <img src={java}/>
                                    <img src={mysql}/>
                                    <img src={jquery}/>
                                    <img src={css}/>
                                </div>
                            <div id="line_break">
                                <br />
                            </div>
                            <Link to="/EventPlanner"><h3>View Details</h3></Link>
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Project;