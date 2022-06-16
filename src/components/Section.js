import React from 'react';
import mac from "../img/sectionImg/Мокап.png"
import ellipse from "../img/sectionImg/Ellipse 2.png"
import polygon from "../img/sectionImg/Polygon 3.png"


const Section = () => {

    const section = {
        background: "#001355",
        // boxShadow: "0 0 10px 5px "
    }
    const btn = {
        width: "383px",
        height:" 75px",
        left: "528px",
        top: "691px",
    }




    return (
        <div>
            <div className="container " style={section}>
                <div className="flex justify-between overflow-hidden ">
                    <div className="-mt-5">
                        <img src={ellipse} alt=""/>
                    </div>
                    <div className="mt-36">
                        <img src={mac} alt=""/>
                    </div>
                    <div className="mt-44 ">
                        <img src={polygon} alt=""/>
                    </div>

                </div>
                <div className="text-center -my-16">
                    <button style={btn}  type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800
                             focus:ring-purple-300 font-light  rounded-lg
                            text-3xl px-10 py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 ">Подключиться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section;


// <div className="text-center -mt-36 ">
//     <button className="bg-purple-700 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-2xl">
//         Подключиться
//     </button>
// </div>