

import { BsCoin } from "react-icons/bs";




const Navber = ({coine}) => {
    return (
        <div className="z-50 fixed top-0 ">
            <div className="bg-[#B1D690]  rounded-lg p-6  ml-[19rem] flex gap-[51.5rem] items-center">
                <h1 className="text-5xl font-bold text-[#37AFE1]">Logo</h1>
                <div>
                    <ul className="flex items-center gap-6">
                        <li><a className="text-xl font-semibold" href="/">Home</a></li>
                        <li><a className="text-xl font-semibold" href="/about">About</a></li>
                        <li><a className="text-xl font-semibold" href="/login">Login</a></li>
                        <li><a className="text-xl font-semibold" href="/ragister">Ragister</a></li>
                        <button className="btn text-2xl text-black"> {coine}coine <span className="text-yellow-500"><BsCoin></BsCoin></span></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;