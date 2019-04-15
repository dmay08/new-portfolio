import React from 'react'
import './Skills.css'

const iconStyle = { // inline styling for icons
    fontSize: '46px',
    // display: 'inline'
}

const Skills = () => {
    return (
        <div id="skills-wrap">

            <div id="skills-title">
                <h1>Skills</h1>
            </div>

            <div id="inner-wrap">

                <div className="five-icons">
                    <div className="icon-and-title">
                        <p>HTML5</p>
                        <i style={iconStyle} class="devicon-html5-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>CSS3</p>
                        <i style={iconStyle} class="devicon-css3-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>JavaScript</p>
                        <i style={iconStyle} class="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Python</p>
                        <i style={iconStyle} class="devicon-python-plain colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>React</p>
                        <i style={iconStyle} class="devicon-react-original-wordmark colored"></i>
                    </div>
                </div>

                <div className="five-icons">
                    <div className="icon-and-title">
                        <p>Node.js</p>
                        <i style={iconStyle} class="devicon-nodejs-plain colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Express</p>
                        <i style={iconStyle} class="devicon-express-original colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>jQuery</p>
                        <i style={iconStyle} class="devicon-jquery-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Angular</p>
                        <i style={iconStyle} class="devicon-angularjs-plain colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Django</p>
                        <i style={iconStyle} class="devicon-django-plain colored"></i>
                    </div>
                </div>

                <div className="five-icons">
                    <div className="icon-and-title">
                        <p>MongoDB</p>
                        <i style={iconStyle} class="devicon-mongodb-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>PostgreSQL</p>
                        <i style={iconStyle} class="devicon-postgresql-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>AWS</p>
                        <i style={iconStyle} class="devicon-amazonwebservices-original colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Bootstrap</p>
                        <i style={iconStyle} class="devicon-bootstrap-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Git</p>
                        <i style={iconStyle} class="devicon-git-plain colored"></i>
                    </div>
                </div>

                <div className="five-icons">
                    <div className="icon-and-title">
                        <p>Gitlab</p>
                        <i style={iconStyle} class="devicon-gitlab-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>GitHub</p>
                        <i style={iconStyle} class="devicon-github-plain-wordmark colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Slack</p>
                        <i style={iconStyle} class="devicon-slack-plain colored"></i>
                    </div>
                    <div className="icon-and-title">
                        <p>Heroku</p>
                        <i style={iconStyle} class="devicon-heroku-plain-wordmark colored"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills