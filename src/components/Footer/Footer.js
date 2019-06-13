import React from 'react'
import './Footer.scss'

const contactIcon = { // inline styling for icons
    fontSize: '66px'
}

const Footer = () => {
    return (
        <div id="contact">
            <h1 id="contact-title">Contact</h1>
            <a className="email hvr-underline-from-center" href="mailto:dmayasich08@gmail.com">dmayasich08@gmail.com</a>
            <div>
                <a className="fab fa-github-square hvr-grow" style={contactIcon} href="https://github.com/dmay08" aria-hidden="true"></a>
                <a className="fab fa-linkedin hvr-grow" style={contactIcon} href="https://www.linkedin.com/in/dannymayasich/"></a>
                <a className="fab fa-instagram hvr-grow" style={contactIcon} href="https://www.instagram.com/lapsedtraveler/"></a>
            </div>


            
            {/* <nav class="menu">
                <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" for="menu-open">
                    <span class="hamburger hamburger-1"></span>
                    <span class="hamburger hamburger-2"></span>
                    <span class="hamburger hamburger-3"></span>
                </label>

                <a href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
                <a href="#" class="menu-item"> <i class="fa fa-plus"></i> </a>
                <a href="#" class="menu-item"> <i class="fa fa-heart"></i> </a>
            </nav> */}
        </div>
    )
}

export default Footer

