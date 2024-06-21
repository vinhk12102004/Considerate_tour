import React from "react";
import './Hero.css'
import Search from "../Search";

const Hero = () => {
    return (
        < div class="main-container" >
            <div class="halongg"></div>
            <span class="hot-tour">HOT TOUR</span>
            <span class="ha-long-bay">HA LONG BAY</span>
            <div class="container-kkk">
                <button class="button-reviews">10 reviews |</button>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <span class="rating"> 4,9/5 </span>
            </div>

            <button class="button-tmt" >
                <span class="take-me-there">Take me there</span>
            </button>
            <Search />

        </div >

    )
}

export default Hero