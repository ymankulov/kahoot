import React from 'react';
import Motion from '../img/image 5.svg'
import Rus from '../img/rus.svg'


const Header = () => {
    const header = {
        background: "#3DBE00",
    }


    return (
        <div className='container'>
            <div style={header} className='flex justify-between p-5'>
                <div className='flex  justify-between flex-wrap text-white mx-20'>
                    <img src={Motion} alt=""/>
                    <h3 style={{margin: "auto"}}>MOTION <br/>TEST</h3>
                </div>
                <div>
                    <button className='bg-purple-800 flex flex-wrap justify-between items-center rounded-3xl m-3 p-3  mx-20'>
                        <img src={Rus} alt=""/>
                        <h4>рус</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
// const header = {
//     background: "#010049",
//     position: "fixed",
//     width: "100%",
//     zIndex: "999"
// }


// <div className='container'>
//     <div className='bg-blue-900 flex  justify-between flex-wrap '>
//         <div className='flex  justify-between flex-wrap'>
//             <img src={Motion} alt=""/>
//             <h3>MOTION <br/>TEST</h3>
//         </div>
//         <div>
//             <button className='bg-purple-800 flex flex-wrap justify-between items-center rounded-full m-3 h-10'>
//                 <img src={Rus} alt=""/>
//                 <h4>рус</h4>
//             </button>
//         </div>
//     </div>
// </div>
