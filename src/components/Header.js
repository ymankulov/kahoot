import React from 'react';
import Motion from '../img/image 5.svg'
import Rus from '../img/rus.svg'


const Header = () => {
    return (
        <div className='container'>
            <div className='bg-blue-900 flex  justify-between flex-wrap '>
                <div className='flex  justify-between flex-wrap'>
                    <img src={Motion} alt=""/>
                    <h3>MOTION <br/>TEST</h3>
                </div>
                <div>
                    <button className='bg-purple-800 flex flex-wrap justify-between items-center rounded-full m-3 h-10'>
                        <img src={Rus} alt=""/>
                        <h4>рус</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;