import React from 'react';
import './index.css';




export default function Search() {
    return (
        <div class="main-container-search">
            <div class="where">
                <div class="vector"></div>
                <span class="where-1">Where</span>
                <span class="all-where">-All where -</span>
                <div class="vector-2"></div>
            </div>
            <div class="type">
                <div class="vector-3"></div>
                <span class="type-4">Type</span>
                <span class="all-type">-All type -</span>
                <div class="vector-5"></div>
            </div>
            <div class="when">
                <div class="vector-6"></div>
                <span class="when-7">When</span><span class="date">(Date)</span>
                <div class="vector-8"></div>
            </div>
            <div class="guest">
                <div class="vector-9"></div>
                <span class="guests">Guests</span><span class="zero">0</span>
                <div class="vector-a"></div>
            </div>
            <button class="search-button">
                <span class="search-span">Search</span>
            </button>
        </div>


    );
}
