import React from 'react';
import './Banner.css'
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="bannerContainer">
            <div className="bannerText">
                <h1>Club Picker</h1>
                <p>Pick your most favourite club from here</p>
            </div>
            <img src={banner} alt=""/>
        </div>
    );
};

export default Banner;