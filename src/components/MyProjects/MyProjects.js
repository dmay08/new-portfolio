import React from 'react'
import './MyProjects.css'

const MyProject = () => {
    return (
        <div id="my-projects-wrap">

            <div className="my-projects-title">
                <h1>My Projects</h1>
            </div>

            <div className="project-and-info-wrap">
                <div className="project info">
                    <h2>Ask a Med Student</h2>
                    <p>A platform to connect people interested in medical school with current medical students. Users can submit questions that medical students can respond to.</p>
                    <p>HTML | CSS | JavaScript | MongoDB | Express | React | NodeJS</p>
                    <section>
                        <a class="button" href="https://github.com/dmay08/ask-a-med-student">View Code</a>
                        <a class="button" href="http://askamedstudent.herokuapp.com/">Launch App</a>
                    </section>
                </div>
                <div className="project image hvr-grow">
                    <a href="http://askamedstudent.herokuapp.com/">
                        <div class="image-wrap">
                            <img class="images roll-in-left" src="https://i.imgur.com/fnHFK33.png" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="project-and-info-wrap">
                <div className="project image hvr-grow">
                    <a href="https://fizzquizz.herokuapp.com">
                        <div class="image-wrap">
                            <div class="image-box">
                                <img class="images" src="https://i.imgur.com/3Ug7Xsf.jpg" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project info flip">
                    <h2>The Fizz Quizz</h2>
                    <p>The hot-potato-style-trivia-drinking-game!
                        Two teams face off to answer as many trivia questions as
                        possible before the timer runs out. Choose a wrong answer?
                        Drink! Timer runs out & you’re holding the phone? Drink!</p>
                    <p>HTML | CSS | JavaScript | MongoDB | Express | NodeJS | API </p>
                    <section>
                        <a class="button" href="https://github.com/dmay08/fizz-quiz">View Code</a>
                        <a class="button" href="https://fizzquizz.herokuapp.com">Launch App</a>
                    </section>
                </div>
            </div>
            <div className="project-and-info-wrap">
                <div className="project info" id="pink-desert">
                    <h2>PINK Desert Clothing Co.</h2>
                    <p>PINK Desert Clothing Co. is an online storefront for a
                        t-shirt company. Visitors can sign
                        up and login in order to browse products, view product detail
                        pages, and add or remove products to & from a shopping cart.</p>
                    <p>HTML | CSS | Python | Django</p>
                    <section>
                        <a class="button" href="https://github.com/dmay08/weird-millennial">View Code</a>
                        <a class="button" href="https://lit-brushlands-64189.herokuapp.com/">Launch App</a>
                    </section>
                </div>
                <div className="project image hvr-grow">
                    <a href="https://lit-brushlands-64189.herokuapp.com/">
                        <div class="image-wrap">
                            <div class="image-box">
                                <img class="images" src="https://i.imgur.com/LaRASjZ.png" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="project-and-info-wrap">
                <div className="project image hvr-grow">
                    <a href="https://dmay08.github.io/hangman/">
                        <div class="image-wrap">
                            <div class="image-box">
                                <img class="images" src="https://i.imgur.com/Nhs5HgU.png" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="project info flip">
                    <h2>Danny's Hangman</h2>
                    <p>Danny's Hangman is a one-player browser game based
                        on the traditional two-player hangman game. User
                        chooses a category and clicks individual letter buttons
                        to guess the randomly generated word within 6 guesses.</p>
                    <p>HTML | CSS | JavaScript</p>
                    <section>
                        <a class="button" href="https://github.com/dmay08/hangman">View Code</a>
                        <a class="button" href="https://dmay08.github.io/hangman/">Launch App</a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default MyProject