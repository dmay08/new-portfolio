import React from 'react'
import './Birds.scss'

const Birds = () => {
    return (
        <div className="bird-wrap">
            <div class="container">

                <div class="bird-container bird-container--one">
                    <div class="bird bird--one"></div>
                </div>

                <div class="bird-container bird-container--two">
                    <div class="bird bird--two"></div>
                </div>

                <div class="bird-container bird-container--three">
                    <div class="bird bird--three"></div>
                </div>

                <div class="bird-container bird-container--four">
                    <div class="bird bird--four"></div>
                </div>

            </div>

        </div>
    )
}

export default Birds