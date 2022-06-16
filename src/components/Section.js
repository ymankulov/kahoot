import React from 'react';
import mac from "../img/sectionImg/Мокап.png"
import ellipse from "../img/sectionImg/Ellipse 2.png"
import polygon from "../img/sectionImg/Polygon 3.png"


const Section = () => {

    const section = {
        background: "#001355",

    }

    return (
        <div>
            <div className="container " style={section}>
                <div className="flex justify-between overflow-hidden ">
                    <div className="-mt-5">
                        <img src={ellipse} alt=""/>
                    </div>
                    <div>
                        <img src={mac} alt=""/>
                    </div>
                    <div className="mt-72">
                        <img src={polygon} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section;