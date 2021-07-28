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
            <h1>
                About
            </h1>
            <About/>
            <h1>
                Projects
            </h1>
            <Project/>
            <h1>
                Contact
            </h1>
            <Contact/>
            <footer>
                <BottomFooter/>
            </footer>
            
        </div>
    )
}

