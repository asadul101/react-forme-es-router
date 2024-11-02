import { useNavigate } from "react-router-dom";


const Register = () => {
    const naveget=useNavigate()
    const handleHome=()=>{
        naveget('/')
    }
    return (
        <div>
            <div className="flex items-center justify-center max-w-7xl mx-auto h-[700px] mt-10 rounded-2xl bg-[#7ED4AD] mb-24">
                <div className="w-[500px] h-[500px] bg-[#77CDFF] rounded-xl flex justify-center items-center flex-col">
                    <h1 className="text-2xl font-bold text-black mb-3">Register Frome</h1>
                    <div>
                        <form>
                            <h2 className="font-bold">Email</h2>
                            <input className="border-none outline-none w-full h-[35px] bg-lime-100 pl-4" type="email" placeholder="Enter your Email" />
                            <p className="text-red-400"></p>
                            <h2 className="font-bold">Password</h2>
                            <input
                                
                                className="border-none w-full outline-none  h-[35px] bg-lime-100 pl-4" type="number" placeholder="Enter your Password" />
                            <p className="text-red-400 mb-6"></p>
                            <div className="flex items-center gap-4">
                                <p>Your account please? <span className="text-blue-500">Login</span></p>
                                <button onClick={handleHome} className="btn font-bold">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;