import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id="about-me-wrap">
                <div id="pic-and-text-wrap">
                    <img id="my-pic" class="hvr-rotate" src={require('../Images/me.jpg')} />
                    <div id="text-wrap" class="hvr-forward">
                        <h2>About me...</h2>
                        <br/>
                        <p>I'm a Front End / Full Stack Developer with a passion
                            for art and science. Coding allows me to
                            combine my love of design with the technical
                            aspects of programming to create visually
                            appealing and functional web applications.
                        </p>
                        <br/>
                        <p> Prior to coding,
                            I was a medical student until I "saw the light" and
                            switched over to a challenging and exciting career in web development.
                            Best decision I ever made.
                        </p>
                    </div>
                </div>
                <div></div>
            <br />
            {/* <a class="fab fa-instagram" style={"font-size:36px"} href="https://www.instagram.com/lapsedtraveler/" aria-hidden="true"></a> */}
            <br />
        </div>
    )
}

export default AboutMe