import React from 'react'
import './Skills.css'

const largeIconStyle = { // inline styling for icons
    fontSize: '46px'
}

const smallIconStyle = {
    fontSize: '25px'
}

class Skills extends React.Component {

    state = {
        width: window.innerWidth,
        // name: 'danny'
    }


    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth })
    }

    render() {

        let iconSize
        if (this.state.width > 580) {
            iconSize = '46px'
        } else {
            iconSize = '10px'
        }

        return (
            <div id="skills-wrap">

                <div id="skills-title">
                    <h1>Skills</h1>
                </div>

                <div id="inner-wrap">

                    <div className="five-icons">
                        <div className="icon-and-title hvr-radial-out">
                            <p>HTML5</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-html5-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>CSS3</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-css3-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>JavaScript</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-javascript-plain"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>React</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-react-original colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Node.js</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-nodejs-plain colored"></i>
                        </div>
                    </div>

                    <div className="five-icons">
                        <div className="icon-and-title hvr-radial-out">
                            <p>Python</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-python-plain"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Express</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-express-original"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>jQuery</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-jquery-plain-wordmark"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Angular</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-angularjs-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Django</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-django-line"></i>
                        </div>
                    </div>

                    <div className="five-icons">
                        <div className="icon-and-title hvr-radial-out">
                            <p>MongoDB</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-mongodb-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>PostgreSQL</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-postgresql-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>AWS</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-amazonwebservices-original colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Bootstrap</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-bootstrap-plain"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Git</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-git-plain colored"></i>
                        </div>
                    </div>

                    <div className="five-icons">
                        <div className="icon-and-title hvr-radial-out">
                            <p>Gitlab</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-gitlab-plain colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>GitHub</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-github-plain"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Slack</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-slack-plain"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>Heroku</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-heroku-line colored"></i>
                        </div>
                        <div className="icon-and-title hvr-radial-out">
                            <p>VS Code</p>
                            <i style={this.state.width > 580 ? largeIconStyle: smallIconStyle} class="devicon-visualstudio-plain colored"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills