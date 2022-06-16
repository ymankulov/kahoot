import React from 'react';
import Motion from '../img/image 5.svg'
import Rus from '../img/rus.svg'


const Header = () => {
    const header = {
        background: "#080077",
        // boxShadow: "0 0 10px 5px"

    }


    return (
        <div style={header} className='container'>
            <div className=' flex justify-between pb-5 py-2'>
                <div className='flex  justify-between flex-wrap text-white mx-20'>
                    <img src={Motion} alt=""/>
                    <h3 style={{margin: "auto"}}>MOTION <br/>TEST</h3>
                </div>
                <div>
                    <button className='bg-purple-800 flex flex-wrap justify-between items-center rounded-3xl py-2 px-4 m-3 p-3  mx-20 text-white'>
                        <img src={Rus} alt=""/>
                        <h4>рус</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;

