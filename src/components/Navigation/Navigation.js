import React from 'react'
import './Navigation.css'

class Navigation extends React.Component {
    
    componentDidMount() {
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');

        navBarToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        });
    }
    
    render() {
        
        return (
            <div>
                <nav class="navbar">
                    <span class="navbar-toggle" id="js-navbar-toggle">
                        <i class="fas fa-bars"></i>
                    </span>
                    <a class="logo">DM</a>
                    <ul class="main-nav" id="js-menu">
                        <li>
                            <a href="#about" class="nav-links">About</a>
                        </li>
                        <li>
                            <a href="#projects" class="nav-links">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" class="nav-links">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
       



};

export default Navigation;
