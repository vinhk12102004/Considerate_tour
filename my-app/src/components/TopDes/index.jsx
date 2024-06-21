

import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function TopDes() {
    return (
        <div className='main-container-td bg-light' >
            <span className='choose-your-experience'>CHOOSE YOUR EXPERIENCE</span>
            <span className='top-attractive-destinations'>
                Top Attractive Destinations
            </span>
            <div className='line-td' />
            <div className='flex-row' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className='south-vietnam' >
                    <div className='southern-vietnam' />
                    <span className='southern-vietnam-1'>Southern Vietnam</span>
                </div>
                <Link to="/northernVN" className='northern'>
                    <div className='northern-vietnam' />
                    <span className='northern-vietnam-2'>Northern Vietnam</span>
                </Link>
                <div className='central-of-vietnam'>
                    <div className='central-of-vietnam-3' />
                    <span className='central-of-vietnam-4'>Central of Vietnam</span>
                </div>
            </div>
            <div className='flex-row-dcf' data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className='westside-vietnam'>
                    <div className='westside' />
                    <span className='westside-vietnam-5'>
                        Westside Vietnam
                    </span>
                </div>
                <div className='world'>
                    <div className='world-8' />
                    <span className='world-101'>
                        World
                    </span>
                </div>
            </div>
        </div>
    );
}