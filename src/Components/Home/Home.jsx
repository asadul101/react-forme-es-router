import { Outlet } from "react-router-dom";

import Banner from "../Navber/Banner";
import Navber from "../Navber/Navber";
import { useState } from "react";
import { toast } from "react-toastify";



const Home = () => {
    const [coine, setCoine] = useState(0)
    const handleClick = () => {
        toast.success("Coine Success!")
        setCoine(coine + 60000)
    }

    return (
        <div>

            <Navber coine={coine}/>
            <Banner handleClick={handleClick}/>
            <Outlet />
        </div>
    );
};

export default Home;