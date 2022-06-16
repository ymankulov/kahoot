import React from 'react';
import Motion from '../img/image 5.svg'
import Rus from '../img/rus.svg'
import '../css/Header.css'



const Header = () => {
    return (
        <div className='container header'>
            <div className=' flex justify-between flex-wrap items-center mx-auto ' style={{
                background: '#001355'
            }}>
                <div className='flex  items-center justify-between flex-wrap text-white text-2xl ml-20'>
                    <img src={Motion} alt=""/>
                    <h3>MOTION <br/>TEST</h3>
                </div>
                <div>
                    <button className=' mr-20 bg-purple-800 flex flex-wrap justify-between items-center rounded-full m-3 h-10 text-xs text-white'>
                        <img src={Rus} alt=""/>
                        <h4>рус</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;