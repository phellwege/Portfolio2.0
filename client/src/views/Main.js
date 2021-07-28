import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from "../components/Logo";
import About from "../components/About";
import BottomFooter from "../components/BottomFooter"
import Project from "../components/Project"
import Contact from "../components/Contact"

export default () => {
    return (
        <div>
            <Logo/>
            <a id="About">
                <h1 id="main_page_h1">
                About
                </h1>
            </a>
            <About/>
            <a id="Projects">
                <h1 id="main_page_h1">
                    Projects
                </h1>
            </a>
            <Project/>
            <a id="Contact">
                <h1 id="main_page_h1">
                    Contact
                </h1>
            </a>
            <Contact/>
            <footer>
                <BottomFooter/>
            </footer>
            
        </div>
    )
}

