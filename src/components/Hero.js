import React from 'react';
import Mac from '../img/mac.png'
import '../css/Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className='fig'>
                <div className="fig1">
                </div>
                <div className="fig2">
                </div>
            </div>
                <div  className="flex flex-wrap justify-center items-center " >
                    <img className="mt-10" src={Mac} alt=""/>



                </div>


            </div>
        </div>

    );
};

export default Hero;