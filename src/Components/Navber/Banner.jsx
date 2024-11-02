/* eslint-disable react/prop-types */
import { BsCoin } from "react-icons/bs";


const Banner = ({handleClick}) => {
   
    return (
        <div className="mt-32">
            <div className="hero p-28 bg-gradient-to-r from-indigo-500 from-1% via-sky-500 via-30% to-emerald-500 to-70% max-w-7xl mx-auto rounded-2xl mt-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Coine Adding</h1>
                        <p className="text-xl mt-6 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam voluptatum ab ducimus <br />odit blanditiis quasi nobis enim aliquid possimus!
                        </p>
                        <button onClick={handleClick} className="btn text-2xl font-bold">Coine add <span className="text-yellow-500"><BsCoin /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;