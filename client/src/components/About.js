import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import LoopTrue from './LoopProp';
import LinkedinLoop from './LinkedinLoop';
import HeadShot from '../static/HeadShot.jpeg';
import '../Project.css';
import MapContainer from '../components/GoogleMaps';

const About = () => {
    return (
        <>
            <div id="full_body_wrap">
                <div id="image_wrap">
                    <img src={HeadShot} id="HeadShotImg" />
                    <div class="text_wrap">
                        <br/>
                        <h1>
                            Peter Hellwege
                        </h1>
                        <br />
                        <div id="line_break"></div>
                        <h2>Technology</h2>
                        <p>
                            LANGUAGES: JavaScript(ES6), JAVA, Python, CSS, HTML
                            <br />
                            FRONT END: React, jQuery, AJAX, JSON, RESTful APIs, Bootstrap, Materialize, React-Carousel, React-Spring, React-Multer, React-MaterialUI
                            <br />
                            BACK END: Node.js, Django, Flask, Rails, AWS, Socket.io, OOP
                            <br />
                            DATABASES: SQL (MySQL, SQLite), NoSQL (MongoDB), Django ORM
                        </p>
                        <br />
                        <div id="line_break"></div>
                        <Link to="../static/Peter.Hellwege.Resume_3.pdf" target="_blank" download><button id="resume_button" >Download Resume</button></Link>
                        <div id="line_break"></div>
                        <br />
                        <p id="quote">
                            “The Purpose of software engineering is to control complexity, not to create it.”
                            <div id="line_break"></div>
                        </p>-- Pamela Have
                        <div id="line_break"></div>
                        <br />
                        <br />
                        <a href="https://github.com/phellwege"><LoopTrue />GitHub</a>
                        <br />
                        <a href="http://linkedin.com/in/peter-hellwege"><LinkedinLoop />Linkedin</a>
                        <br />
                        <div id="line_break"></div>
                        <br />
                        <div class="google_maps">
                            <h3>Where am I located?</h3>
                            <p> Scenic <span id="boldMe">Boise, Idaho</span> I would also be more than happy to work remotely on your behalf. </p>
                            <br />

                            {/* <MapContainer />             */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;