import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Logo from "../components/Logo";
import BottomFooter from "../components/BottomFooter";
import MapContainer from '../components/GoogleMaps';
import LoopTrue from '../components/LoopProp';
import LinkedinLoop from '../components/LinkedinLoop';
import "../Project.css";

init("user_hOa8mddjJS2F9fVd2mfLC");

function Contact() {
    return (
        <>
            <div class="full_page_wrap">
                <div class="contact_page_wrapper">
                    <div id="form_wrapper">
                        <h2>Contact Me</h2>
                        <form target="_blank" action="https://formsubmit.co/phellwege1@gmail.com" method="POST">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                                    </div>
                                    <br/>
                                    <div class="col">
                                        <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div class="form-group">
                                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                        </form></div>
                    <div class="text_wrap">
                        <h3>Feel free to reach out!</h3>
                        <p> This form is for general inquiries, and to establish contact. Please do not submit any sensitive information.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact